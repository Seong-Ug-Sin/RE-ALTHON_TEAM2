import NewsCard from '@/components/NewsCard';
import { NewsCardDto } from '@/types/dto/NewsCardDto';

const news: NewsCardDto[] = [
  {
    id: 1, // 고유 ID 추가
    title: 'The Next.js Blog',
    description: 'The official blog for Next.js',
    pressName: 'Next.js',
    commentCount: 10,
    likeCount: 20,
    createdAt: new Date('2024-12-01T12:00:00'),
    imageUrl: 'https://nextjs.org/static/images/twitter-card.png',
    link: 'https://nextjs.org/blog',
  },
  {
    id: 2, // 고유 ID 추가
    title: 'React 18 Released',
    description: 'Learn about the new features in React 18.',
    pressName: 'React Team',
    commentCount: 30,
    likeCount: 50,
    createdAt: new Date('2024-11-20T08:00:00'),
    imageUrl: 'https://reactjs.org/logo-og.png',
    link: 'https://reactjs.org/blog/2024/11/20/react-v18.html',
  },
  {
    id: 3, // 고유 ID 추가
    title: 'TypeScript 5.0 Overview',
    description: 'Get started with the latest version of TypeScript.',
    pressName: 'TypeScript Team',
    commentCount: 15,
    likeCount: 25,
    createdAt: new Date('2024-10-15T10:00:00'),
    imageUrl:
      'https://www.typescriptlang.org/assets/images/icons/favicon-32x32.png',
    link: 'https://www.typescriptlang.org/docs/overview',
  },
];

export default function Home() {
  // 날짜 포맷 함수
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    }).format(date);
  };

  return (
    <div className="container mx-auto px-4 border border-gray-200 min-h-screen">
      {/* 전체 Flex 레이아웃 */}
      <div className="flex flex-row h-full">
        {/* 왼쪽 섹션: 뉴스 카드 */}
        <div className="flex-[2] p-4">
          <h2 className="text-xl font-bold mb-4">Latest News</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((newsItem) => (
              <NewsCard
                key={newsItem.id}
                title={newsItem.title}
                description={newsItem.description}
                pressName={newsItem.pressName}
                commentCount={newsItem.commentCount}
                likeCount={newsItem.likeCount}
                createdAtString={formatDate(newsItem.createdAt)}
                imageUrl={newsItem.imageUrl}
                link={newsItem.link}
              />
            ))}
          </div>
        </div>

        {/* 수직 구분선 */}
        <div className="border-l border-gray-300 min-h-screen"></div>

        {/* 오른쪽 섹션: 추가 콘텐츠 */}
        <div className="flex-1 p-4">
          <h2 className="text-xl font-bold mb-4">Highlights</h2>
          <ul className="list-disc list-inside">
            <li>
              <a
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Explore Next.js
              </a>
            </li>
            <li>
              <a
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Learn React
              </a>
            </li>
            <li>
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Master TypeScript
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
