module.exports = {
  async getServices() {
    const skills = [
      {
        title: "Consulting",
        footerText:
          "Consulting services ensure feature enhancement and support throughout all stages of app development. Client's needs are thoroughly understood and used to devise the most beneficial & effective business solutions.",
        background: "linear-gradient(rgb(158, 120, 251), #70c3f1 99%)",
        iconColor: "white",
        titleColor: "white",
        icon: "fa fa-code icon",
        descColor: "white",
        viewMoreLink: "/consulting",
      },
      {
        title: "Design & Development",
        titleColor: "white",
        iconColor: "white",
        footerText:
          "Your online presence can make or break your business. Design & development services ensure the creation of an appropriate, effective web design that reflects your business. In addition, we implement any feature requirements for your application.  ",
        background: "linear-gradient(#70c3f1, rgb(241, 175, 12) 99%)",
        icon: "fa fa-wifi icon",
        descColor: "white",
        viewMoreLink: "/development",
      },
      {
        title: "Support & Maintenance",
        footerText:
          "Support & maintenance services ensure that your application is highly reliable, available & can evolve with the ever-growing needs/changes of your business.",
        background: "linear-gradient(rgb(158, 120, 251), #70c3f1 99%)",
        iconColor: "white",
        titleColor: "white",
        icon: "fa fa-wordpress icon",
        descColor: "white",
        viewMoreLink: "/maintenance",
      },
    ];
    return skills;
  },
};
