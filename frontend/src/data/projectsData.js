export const projects = [
  {
    id: "NAS",
    title: "Network Attached Storage (NAS)",
    description:
      "A multipurpose network storage server with file sharing, multimedia streaming, and cloud \
      synchronization capabilities.",
    imageName: "nas.png", // image source: https://www.flaticon.com/free-icon/nas_4943821
    created: "July 20th, 2023",
    updated: "January 23rd, 2024",
  },
  {
    id: "RaspberryPi5",
    title: "Raspberry Pi 5",
    description:
      "Used to host this website. I SSH into the Pi using certificates I configured to update the \
      website and manage the server.",
    imageName: "pi.png", // image source: https://iconduck.com/icons/14184/raspberry-pi
    created: "February 21st, 2024",
    updated: "February 24th, 2024",
  },
  {
    id: "Wazuh",
    title: "Wazuh XDR/SIEM",
    description:
      "Served to the network by an Ubuntu VM running on my NAS, Wazuh is an open-source XDR and \
      SIEM tool used to view relevant security events and to orchestrate active response to protect \
      against threats.",
    imageName: "wazuh.png", // image source: https://en.wikipedia.org/wiki/File:Wazuh_blue.png
    created: "February 4th, 2024",
    updated: "February 18th, 2024",
  },
  {
    id: "AdGuard",
    title: "DNS Sinkhole",
    description:
      "Using AdGuard Home, I configured a DNS sinkhole to block ads, trackers, and malware. \
      The service analyzes all network DNS requests, and returns an empty address for unwanted sites.",
    imageName: "adguard.png", // image source: https://iconduck.com/icons/252880/adguard-home
    created: "July 22nd, 2023",
    updated: "July 25th, 2023",
  },
  // Add more projects here
];
