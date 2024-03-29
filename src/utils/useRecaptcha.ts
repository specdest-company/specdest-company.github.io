import { useCallback } from 'react';

const ID = 'google-recaptcha-v3'; // script タグのIDとして使用する任意の文字列
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const SITE_KEY = import.meta.env.VITE_RECAPCHA_SITE_KEY; // reCAPTCHA の site key

export interface UseReCaptcha {
  /**
   * reCAPTCHA の読み込みを非同期で行う
   */
  load: () => void;

  /**
   * reCAPTCHA の読み込みが完了するのを待つ
   */
  ready: () => Promise<ReCaptchaV2.ReCaptcha>;

  /**
   * reCAPTCHA を実行する
   */
  execute: (action: ReCaptchaV2.Action) => Promise<string>;
}

export function useReCaptcha(): UseReCaptcha {
  const load = useCallback(() => {
    if (document.getElementById(ID)) {
      // 既に読み込みが開始されている場合は何もしない
      return;
    }

    const head = document.getElementsByTagName('head')[0];
    const script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
    script.id = ID;
    head.appendChild(script);
  }, []);

  const ready = useCallback(() => {
    return new Promise<ReCaptchaV2.ReCaptcha>((resolve) => {
      load();

      // reCAPTCHA がまだ読み込まれていない場合に ready 関数だけ事前に用意しておく
      // `window.___grecaptcha_cfg.fns` にコールバック関数を push しておくと reCAPTCHA が ready 状態になった時に呼び出してくれる
      // See: https://developers.google.com/recaptcha/docs/loading#loading_recaptcha_asynchronously
      if (typeof window.grecaptcha.ready === 'undefined') {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        window.grecaptcha = window.grecaptcha || {};
        window.grecaptcha.ready = (cb: () => void) => {
          // @ts-expect-error  currenlty we don't have type on wondow object
          window.___grecaptcha_cfg ??= {};
          // @ts-expect-error  currenlty we don't have type on wondow object
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          window.___grecaptcha_cfg.fns ??= [];
          // @ts-expect-error  currenlty we don't have type on wondow object
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
          window.___grecaptcha_cfg.fns.push(cb);
        };
      }

      window.grecaptcha.ready(() => {
        resolve(window.grecaptcha);
      });
    });
  }, [load]);

  const execute = useCallback(
    async (action: ReCaptchaV2.Action): Promise<string> => {
      const grecaptcha = await ready();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      return grecaptcha.execute(SITE_KEY, action);
    },
    [ready],
  );

  return { load, ready, execute };
}
