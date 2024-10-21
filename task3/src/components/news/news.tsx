import React from 'react';

const NewsSection = () => {
  const newsItems = [
    {
      date: 'Oct. 21, 2024',
      category: 'Business Products',
      title: 'Launch of Rayfact UV25mm F2.8 C-Mount Lens for Ultraviolet Cameras',
    },
    {
      date: 'Oct. 17, 2024',
      category: 'Consumer Products',
      title: 'Nikon Film and Photo Contest 2024-2025: Call for Entries',
    },
    {
      date: 'Oct. 16, 2024',
      category: 'Technology & Design',
      title: 'Nikon products receive the Good Design Award 2024',
    },
    {
      date: 'Oct. 10, 2024',
      category: 'Business Products',
      title: 'Additional Powder Feeder Enhances Multi-Material Development Capabilities',
    },
    {
      date: 'Oct. 9, 2024',
      category: 'Consumer Products',
      title: 'Nikon introduces new STABILIZED binoculars',
    },
  ];

  return (
    <section className="px-6 py-8  bg-white">
        <div className='mx-40'>
      <h2 className="text-2xl font-bold text-black text-center mb-8">News</h2>
      <ul className="space-y-4">
        {newsItems.map((item, index) => (
          <li key={index} className="flex justify-between items-center border-b pb-4">
            <div className="text-gray-500 w-1/4">{item.date}</div>
            <div className="flex-1">
              <span className="inline-block bg-gray-200 text-gray-700 px-2 py-1  text-sm mr-4">
                {item.category}
              </span>
              <span className="text-gray-700 hover:underline cursor-pointer">
                {item.title} &gt;
              </span>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-8 text-center">
        <a
          href="#"
          className="text-blue-600 hover:underline text-sm font-medium"
        >
          See All News &gt;
        </a>
      </div>
      </div>
    </section>
  );
};

export default NewsSection;
