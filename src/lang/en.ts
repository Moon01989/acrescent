import moment from "moment";

const en = {
  lang:[
    { value: "en", label: "Eng" },
    { value: "vi", label: "Vie" },
  ],
  header: {
    open_navigation : "Open Navigation",
    close_navigation : "Close Navigation",
    theme_switcher: "Theme Switcher",
  },
  footer: {
    about_me: "About me",
    links: [
      // // Format link in Footer
      // {
      //   title: "Example #1",
      //   link: "#",
      // },
    ],
    social_networks: [
      {
        title: "Mail",
        icon: "SiGmail",
        link: "mailto:phungthinguyet1211@gmail.com",
      },
      {
        title: "Linkedin",
        icon: "SiLinkedin",
        link: "https://www.linkedin.com/in/phungnguyet1989/",
      },
      {
        title: "Facebook",
        icon: "SiFacebook",
        link: "https://www.facebook.com/giotgiot/",
      },
      
    ],
    develop_by: "Developed by ",
    build_with: "Built with ",
    with: " with ",
  },
  home: {
    intro: {
      header: "Hi, I'm Phung Nguyet",
      description:
        "I am currently a Regulatory Affair Executive. This website is not about my jobs but about my life. ❤️",
      image: "/assets/images/myview.jpg",
      links: [
        {
          icon: "FaFacebook",
          title: "phungnguyet",
          link: "https://www.facebook.com/giotgiot/",
        },
      ],
    },
    featured_posts: "Featured Posts",
    read_more: "Read more",
    categories: [  
      {
        name: "Review",
        description:
          "Related posts about review.",
        value: ["review", "book","course"],
      },
      {
        name: "Raising Kids",
        description:
          "Related posts about raising kids.",
        value: ["kids", "raising"],
      },
      {
        name: "Knowledge",
        description:
          "Related posts about regulation.",
        value: ["regulation", "knowledge"],
      },
      {
        name: "Tutorial & Tips",
        description: "Tutorials or tips about life.",
        value: ["tutorial", "tip"],
      },
      {
        name: "Other",
        description: "The posts are not related to above topics.",
        value: ["other"],
      },
    ],
  },
  post: {
    published_at_by: (datetime: any, author: any, locale: string) => {
      moment.locale(locale);
      const days = 5;
      let raw = moment(datetime);
      let duration = moment.duration(moment().diff(datetime));
      const _datetime = (duration.asHours() > 24 * days) ? raw.format('DD/MM/YYYY HH:mm') : raw.fromNow();
      return `Published at ${_datetime} by ${author}.`;
    },
    reading_time: (min: any) => {
      return `${min} min read`;
    },
    views: (views: any) => {
      return `${views} views`;
    },
    tags: "Tags",
    relate_post: "Realted Posts:",
    table_of_contents: "Table of Contents"
  },
  blog: {
    blog: "Blog",
    description: "Here you can find all my posts",
    intro: "Here you can find all my posts",
    find_posts: "Posts search...",
    not_found_post: "There are no posts yet",
  },
  tag: {
    tag: "Tag",
    tags: "Tags",
    intro: "You can find articles under the tags below:",
    not_found_post: "There are no posts yet",
    post_by_tag: "Posts by tag:",
  },
  error_page: {
    404 : {
      title: "Page Not Found",
      head: "Sorry, I can't find this page.",
      desc: "But don't worry, you can find many more on your homepage.",
      home_button: "Home"
    }
  },
  common: {
    error: "Error",
    is_loading: "Loading...",
    process_take_few_second: "This process may take a few seconds, please do not close this page.",
  }
};

export default en;
