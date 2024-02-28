export const projects = [
  {
    id: "NAS",
    title: "Network Attached Storage (NAS)",
    description:
      "A multipurpose network storage server with file sharing, multimedia streaming, and cloud \
      synchronization capabilities.",
    descriptionLong: "[insert main description here]",
    imageName: "nas.png", // image source: https://www.flaticon.com/free-icon/nas_4943821
    created: "July 20th, 2023",
    updated: "January 23rd, 2024",
  },
  {
    id: "Wazuh",
    title: "Wazuh XDR/SIEM",
    description:
      "Served to my network by an Ubuntu VM running on my NAS, Wazuh is an open-source XDR and \
      SIEM tool used to view relevant security events and to orchestrate active response to protect \
      against threats.",
    descriptionLong: "",
    imageName: "wazuh.png", // image source: https://en.wikipedia.org/wiki/File:Wazuh_blue.png
    created: "February 4th, 2024",
    updated: "February 18th, 2024",
  },
  {
    id: "Search",
    title: "Search Capstone",
    description:
      "A search engine I developed in Python. The hardest part was building an effective \
      web crawler due to the scale of the internet. This fed into a PostgreSQL \
      database which the GUI queried.",
    descriptionLong: "",
    imageName: "search.png", // image source: https://www.freeiconspng.com/img/2271
    created: "September 5th, 2023",
    updated: "November 28th, 2023",
  },
  {
    id: "RaspberryPi5",
    title: "Raspberry Pi 5",
    description:
      "Used to host this website. To manage the webserver I SSH into the Pi from my \
      Macbook using certificates I configured which is far more secure than using passwords.",
    descriptionLong: "",
    imageName: "pi.png", // image source: https://iconduck.com/icons/14184/raspberry-pi
    created: "February 21st, 2024",
    updated: "February 24th, 2024",
  },
  {
    id: "AdGuard",
    title: "DNS Sinkhole",
    description:
      "Using AdGuard Home, I configured a DNS sinkhole to block ads, trackers, and malware. \
      The service analyzes all network DNS requests, and returns an empty address for unwanted sites.",
    descriptionLong: "",
    imageName: "adguard.png", // image source: https://iconduck.com/icons/252880/adguard-home
    created: "July 22nd, 2023",
    updated: "July 25th, 2023",
  },
  {
    id: "PopOS",
    title: "Pop!_OS",
    description:
      "Breathing new life for utility into an old laptop with 4GB of RAM my grandparents were going \
      to throw away, I installed this Linux distribution and have been having fun using it on the \
      home network.",
    descriptionLong: "",
    imageName: "popos.png", // image source: https://iconduck.com/icons/64969/pop-os
    created: "January 29th, 2024",
    updated: "February 7th, 2024",
  },
  {
    id: "Syncthing",
    title: "Syncthing File Synchronization",
    description:
      "Instead of paying $8/month for the cloud synchronization service offered by my main notetaking app 'Obsidian', \
      I set up Syncthing to synchronize my notes across all my devices using the NAS as the intermediary. \
      It's a great open-source alternative.",
    descriptionLong: "",
    imageName: "syncthing.png", // image source: https://commons.wikimedia.org/wiki/File:SyncthingAugustLogo.png
    created: "July 24th, 2023",
    updated: "July 26th, 2023",
  },

  // Add more projects here
];
