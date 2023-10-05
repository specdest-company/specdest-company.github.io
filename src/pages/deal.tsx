const data = [
  {
    label: '販売業者',
    description: ['Specdest株式会社'],
  },
  {
    label: '運営責任者',
    description: ['代表取締役トゥグス'],
  },
  {
    label: 'メールアドレス',
    description: ['info@specdest.com'],
  },
  {
    label: '代表電話番号',
    description: ['050-5896-5929'],
  },
  {
    label: '販売価格',
    description: [
      '購入手続の際に画面に表示されます。',
      'なお、販売価格以外に、インターネット接続料金、通信料金等はお客様のご負担となります。',
    ],
  },
  {
    label: '商品等の引渡時期等',
    description: [
      'デジタルコンテンツは、購入手続の際に特別な定めを置いている場合を除き、購入手続完了後、直ちにご利用いただけます。',
    ],
  },
  {
    label: 'お支払い方法',
    description: ['クレジットカード決済'],
  },
  {
    label: 'キャンセル',
    description: [
      '購入手続完了後のお客様のご都合によるキャンセル（中途退会による場合を含みます）はできません。',
    ],
  },
];
const Deal = () => {
  return (
    <div className="container m-auto">
      <div className="max-w-[880px] mx-auto pb-40">
        <header className="flex items-center h-20 text-xl font-bold my-24">
          <h1>特定商取引法に基づく表示</h1>
        </header>

        {data.map((item, idx) => {
          return (
            <div
              key={`${item.label}-${idx}`}
              className="grid grid-cols-12 my-16">
              <div className="grid col-span-4 text-left">{item.label}</div>
              <p className="col-span-8 text-left ">
                {item.description.map((desc, idx) => (
                  <div key={idx}>{desc}</div>
                ))}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Deal;
