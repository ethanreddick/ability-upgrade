export const projects = [
  {
    id: "NAS",
    title: "Network Attached Storage (NAS)",
    description:
      "A multipurpose network storage server with file sharing, multimedia streaming, and cloud \
      synchronization capabilities.",
    descriptionLong: `
    <p>Wanting to build a machine that would allow me to both redundantly store my personal data and to host projects for my growing home network, I settled on building a Network Attached Storage device (NAS).</p>
            <p>The parts I chose are as follows:</p>
            <ul>
                <li>N5105/N6005 NAS Demon Board</li>
                <li>250GB PNY M.2 NVMe PCIe Gen3 SSD</li>
                <li>32GB DDR4 3200MHz CL22</li>
                <li>3x Refurbished Enterprise 10TB HDDs</li>
            </ul>

    <p>Once all the parts arrived at my house I assembled the machine, installed the TrueNAS operating system, and accessed the web interface - which I found very intuitive. One of the first hurdles I faced was that every few days when trying to access the NAS I would discover that it had been assigned a different IP address by the DHCP server running on my router. After troubleshooting this I came to the conclusion that my modem/router combo (provided by my ISP) did not support DCHP reservations, which would make it difficult to keep my network organized and the services I set up running properly. Because of this fact, I decided to purchase a mesh-wifi system (Google Nest) that I got on sale and that I knew for a fact supported DHCP reservations. Once the new system arrived I disabled the 2.4 and 5 GHz broadcasts from my old router to limit interference and set the old system's NAT to bridge mode so all traffic was simply forwarded to the Google Nest. Now that this was configured, I would be able to assign the NAS and all the services running on it static IP addresses.</p>

    <p>The first service I set up on the NAS was AdGuard, which served as a DNS sinkhole.
    Read more about this project <a href="../projects/AdGuard/">HERE</a>.</p>
    `,
    references: `
    <ul>
        <li><a href="https://www.truenas.com/docs/">TrueNAS Documentation</a></li>
    </ul>
    `,
    imageName: "icons/nas.png", // image source: https://www.flaticon.com/free-icon/nas_4943821
    projectImages: [
      "projectGallery/NAS/apple_logo.png",
      "projectGallery/NAS/apple_logo.png",
      "projectGallery/NAS/apple_logo.png",
    ],
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
    imageName: "icons/wazuh.png", // image source: https://en.wikipedia.org/wiki/File:Wazuh_blue.png
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
    imageName: "icons/search.png", // image source: https://www.freeiconspng.com/img/2271
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
    imageName: "icons/pi.png", // image source: https://iconduck.com/icons/14184/raspberry-pi
    created: "February 21st, 2024",
    updated: "February 24th, 2024",
  },
  {
    id: "AdGuard",
    title: "DNS Sinkhole",
    description:
      "Using AdGuard Home, I configured a DNS sinkhole to block ads, trackers, and malware. \
      The service analyzes all network DNS requests, and returns an empty address for unwanted sites.",
    descriptionLong:
      "<p>AdGuard is a versatile ad-blocking software intended to remove ads from web pages, block malicious sites, and prevent tracking\
      by online marketers. It runs as a service on my [NAS] and I set my router’s default DNS server as the address of the AdGuard service.</p>\
      <p>This enables AdGuard to see all domains requested by devices on my network and compare them against its rule base. If the domain is to be blocked,\
      AdGuard simply responds to the device’s DNS request with an address of 0.0.0.0, and if the domain is allowed AdGuard forwards the request to an upstream\
      DNS resolver such as Cloudflare’s 1.1.1.1 or Google’s 8.8.8.8. These systems in-turn respond with the address of the requested resource with AdGuard\
      passes back to the requesting device.</p>\
      <p>By blocking unwanted content at the DNS level AdGuard can reduce network congestion and decrease loading times for certain resources.</p>",
    references: `
      <ul>
          <li><a href="https://adguard.com/en/adguard-home/overview.html">AdGuard Home Overview</a></li>
      </ul>
      `,
    imageName: "icons/adguard.png", // image source: https://iconduck.com/icons/252880/adguard-home
    projectImages: ["projectGallery/AdGuard/AdGuardBlocklists.png"],
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
    imageName: "icons/popos.png", // image source: https://iconduck.com/icons/64969/pop-os
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
    imageName: "icons/syncthing.png", // image source: https://commons.wikimedia.org/wiki/File:SyncthingAugustLogo.png
    created: "July 24th, 2023",
    updated: "July 26th, 2023",
  },

  // Add more projects here
];
