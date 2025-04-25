import visitorOneAvatar from "@/../public/assets/images/blog/visitor-1.webp";
import visitorTwoAvatar from "@/../public/assets/images/blog/visitor-2.webp";
import visitorThreeAvatar from "@/../public/assets/images/blog/visitor-3.webp";

import blogOneImage from "@/../public/assets/images/blog/blog-1.webp";
import blogTwoImage from "@/../public/assets/images/blog/blog-2.webp";
import blogThreeImage from "@/../public/assets/images/blog/blog-3.webp";
import blogFourImage from "@/../public/assets/images/blog/blog-4.webp";
import blogFiveImage from "@/../public/assets/images/blog/blog-4.webp";
import blogSixImage from "@/../public/assets/images/blog/blog-4.webp";
import blogSevenImage from "@/../public/assets/images/blog/blog-4.webp";
import blogEightImage from "@/../public/assets/images/blog/blog-4.webp";

import blogDetailImageOne from "@/../public/assets/images/blog/blog-detail-1.webp";
import blogDetailImageTwo from "@/../public/assets/images/blog/blog-detail-2.webp";

import recentPostImageOne from "@/../public/assets/images/blog/recent-post/rp-1.webp";
import recentPostImageTwo from "@/../public/assets/images/blog/recent-post/rp-2.webp";
import recentPostImageThree from "@/../public/assets/images/blog/recent-post/rp-3.webp";

const blogs = [
  {
    image: blogOneImage,
    category: "Entertainment",
    author: "Jhonaton week",
    date: "01 Jan 2024",
    title: "Features Are Making Streaming Inclusive watching content",
    btnText: "Read more",
  },
  {
    image: blogTwoImage,
    category: "Entertainment",
    author: "Jhonaton week",
    date: "01 Jan 2024",
    title: "How OTT Platforms Are Redefining Original Content Creation",
    btnText: "Read more",
  },
  {
    image: blogThreeImage,
    category: "Entertainment",
    author: "Jhonaton week",
    date: "01 Jan 2024",
    title: "How Accessibility Features Are Making Streaming Inclusive",
    btnText: "Read more",
  },
  {
    image: blogFourImage,
    category: "Entertainment",
    author: "Jhonaton week",
    date: "01 Jan 2024",
    title: "Trends, Predictions, and What's Next for Streaming",
    btnText: "Read more",
  },
  {
    image: blogFiveImage,
    category: "Entertainment",
    author: "Jhonaton week",
    date: "01 Jan 2024",
    title: " Features Are Making Streaming Inclusive watching content",
    btnText: "Read more",
  },
  {
    image: blogSixImage,
    category: "Entertainment",
    author: "Jhonaton week",
    date: "01 Jan 2024",
    title: "How OTT Platforms Are Redefining Original Content Creation",
    btnText: "Read more",
  },
  {
    image: blogSevenImage,
    category: "Entertainment",
    author: "Jhonaton week",
    date: "01 Jan 2024",
    title: "How Accessibility Features Are Making Streaming Inclusive",
    btnText: "Read more",
  },
  {
    image: blogEightImage,
    category: "Entertainment",
    author: "Jhonaton week",
    date: "01 Jan 2024",
    title: "Trends, Predictions, and What's Next for Streaming",
    btnText: "Read more",
  },
];

const blogDetailData = {
  imageOne: blogOneImage,
  blogDetailImageOne: blogDetailImageOne,
  blogDetailImageTwo: blogDetailImageTwo,
  category: "Entertainment",
  author: "Jhonaton week",
  date: "01 Jan 2024",
  title: "Features Are Making Are Streaming Inclusive watching content",
  descriptionOne:
    "Breaking Barriers: How Accessibility Features Are Making Streaming Inclusive for All Viewers. In today&apos;s digital age, the way we consume entertainment has undergone a remarkable transformation. With the rise of Over-The-Top (OTT) platforms, accessing a wide range of content has become easier than ever before. However, amidst this convenience, it&apos;s crucial to ensure that streaming services are inclusive and accessible to all viewers, regardless of their abilities. Fortunately, the integration of accessibility features is making significant strides in this direction, revolutionizing the streaming experience for individuals with disabilities.",
  descriptionTwo:
    "Gone are the days when enjoying movies or TV shows was limited to traditional formats. With the advent of streaming platforms like Netflix, Amazon Prime Video, and Disney+, viewers have unparalleled access to a vast array of content at their fingertips. However, for individuals with disabilities, navigating these platforms and enjoying content posed significant challenges. This led to the urgent need for inclusivity in streaming services, prompting the development and implementation of accessibility features.",

  descriptionThree:
    "One of the most fundamental accessibility features in streaming platforms is closed captioning. Originally designed for viewers who are deaf or hard of hearing, closed captions now benefit a much wider audience. They provide textual representation of dialogue and sound effects, ensuring that viewers can follow along with the content regardless of ambient noise or audio clarity. Moreover, closed captions are invaluable for language learners and individuals watching content in noisy environments, further enhancing the inclusivity of streaming platforms.",
  descriptionFour:
    "Another essential accessibility feature is audio description, also known as video description or descriptive video service (DVS). Audio description provides narrated descriptions of visual elements during pauses in dialogue, enabling individuals with visual impairments to fully comprehend the on-screen action. By offering detailed auditory cues about characters, settings, and non-verbal cues, audio description enhances the overall viewing experience and fosters a deeper connection with the content.",
  qoutation:
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
  qoutationAuthor: "Albert Einstein",
};

const commentData = {
  form: {
    title: "Leave A Reply",
    description:
      "Your email address will not be published. Required fields are marked *",
    fields: {
      fullName: {
        label: "Full Name",
        placeholder: "Enter Your Name",
      },
      email: {
        label: "Email",
        placeholder: "Enter Your Mail",
      },
      message: {
        label: "Write your message",
        placeholder: "Write your message",
      },
    },
    btnText: "Submit now",
  },
  comments: [
    {
      avatar: visitorOneAvatar,
      name: "Joey O'HaraV",
      description:
        "Another essential accessibility feature is audio description, also known as video description or descriptive video service (DVS). Audio description provides narrated descriptions of visual elements",

      replies: [
        {
          avatar: visitorTwoAvatar,
          name: "Brendan VonRueden",
          description:
            "Another essential accessibility feature is audio description, also known as video description or descriptive video service (DVS). Audio description provides",
        },
      ],
    },
    {
      avatar: visitorThreeAvatar,
      name: "Harvey Rohan",
      description:
        "Another essential accessibility feature is audio description, also known as video description or descriptive video service (DVS). Audio description provides narrated descriptions of visual",
    },
  ],
};

const sidebarData = {
  title: "Recent Post",
  posts: [
    {
      image: recentPostImageOne,
      date: "01 Jan 2024",
      title: "The Technology Powering Your Favorite movie",
      href: "#",
    },
    {
      image: recentPostImageTwo,
      date: "21 Feb 2024",
      title: "The Battle for Your Screen Time social media",
      href: "#",
    },
    {
      image: recentPostImageThree,
      date: "01 Jan 2024",
      title: "How OTT Platforms Are Shaping Pop Culture",
      href: "#",
    },
  ],
  categories: [
    {
      name: "Tv Series",
      href: "category",
    },
    {
      name: "Movies",
      href: "category",
    },
    {
      name: "Drama Series",
      href: "category",
    },
    {
      name: "Original Shows",
      href: "category",
    },
  ],
  tags: [
    {
      name: "Comedy",
      href: "category",
    },
    {
      name: "Drama",
      href: "category",
    },
    {
      name: "Horror",
      href: "category",
    },
    {
      name: "Trailer",
      href: "category",
    },
    {
      name: "Romantic",
      href: "category",
    },
    {
      name: "Recent",
      href: "category",
    },
    {
      name: "Scifi",
      href: "category",
    },
  ],
};

export default blogs;

export { blogDetailData, commentData, sidebarData };
