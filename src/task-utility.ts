type PostData = {
 id: number;          // id
 title: string;       // タイトル
 body: string;        // 本文
 published: boolean;  // 公開済みかどうか
};

type EditingData = Partial<PostData>;

type SummaryData = Pick<PostData, 'id' | 'title'>;

type PublishData = Readonly<PostData>;

