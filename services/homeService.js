module.exports = {
  async getServices() {
    const skills = [
      {
        title: "Consultation",
        footerText:
          "Well-versed in creating beautiful user interfaces with HTML, CSS,and JS technologies: React, Angular, JQuery",
        background: "linear-gradient(rgb(158, 120, 251), #70c3f1 99%)",
        iconColor: "white",
        titleColor: "white",
        icon: "fa fa-code icon",
        descColor: "white",
      },
      {
        title: "Development",
        titleColor: "white",
        iconColor: "white",
        footerText:
          "Experienced in designing and developing performant, secure, cutting-edge APIs in Node.js & Java",
        background: "linear-gradient(#70c3f1, rgb(241, 175, 12) 99%)",
        icon: "fa fa-wifi icon",
        descColor: "white",
      },
      {
        title: "Optimization & Maintenance",
        footerText:
          "Ample hands-on industry experience involving responsive Wordpress web design and customizing the Wordpress CMS backend.",
        background: "linear-gradient(rgb(158, 120, 251), #70c3f1 99%)",
        iconColor: "white",
        titleColor: "white",
        icon: "fa fa-wordpress icon",
        descColor: "white",
      },
    ];
    return skills;
  },
};
