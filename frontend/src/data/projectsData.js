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
    projectImages: [""],
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
    references: `
    <ul>
        <li><a href="LINK">TEXT</a></li>
    </ul>
    `,
    imageName: "icons/wazuh.png", // image source: https://en.wikipedia.org/wiki/File:Wazuh_blue.png
    projectImages: [""],
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
    descriptionLong:
      "<p>My computer science capstone was done on the question of internet search and \
    how to improve it. My partner Justin Nelson and I iterated through numerous versions of a web crawler \
    to gather the site data for our search engine to display to the user. We initially made progress quickly \
    but ultimately realized that for our crawler to be <i>effective</i> it would have to be very cleverly \
    designed. If the web crawler was implemented in a straight-forward way and simply visited a site, gathered \
    all the links it contained, and then visited all those sites and repeated the process, it would require \
    a ludicrous amount of computing power and time to traverse even a small portion of the internet.</p>\
    <p>Secondly, we began to realize that we needed a creative solution to somehow store the sites we visited \
    so that we could avoid checking them again later, but no simple data structure or database would suffice \
    for this due to the magnitude of data at hand—not to mention the task of having to repeatedly access that \
    data to decide whether to visit a site or not.</p>\
    <p>Enter the bloom filter, a space-efficient data structure that could keep track of the visited sites and \
    would be extremely scalable. The only drawback was that a bloom filter is a probabilistic data structure \
    that has a small chance to deliver a false positive—that is to claim a site had been visited when it had \
    not. Within the context of this application, that drawback was more than acceptable.</p>\
    <p>With this new technique we moved forward and implemented a way for each site and the links it contained \
    to be stored in a PostgreSQL database. As the crawler scanned the web and encountered sites, it would \
    reference the bloom filter to check if the site was new instead of incurring the expensive lookup time \
    of checking the database. </p>\
    <p>Along the way we had been given the good advice that “good sites often lead to good sites”, so we \
    downloaded a current list of the one million top domains on a per-visit basis and modified our site \
    parsing function to only check sites if they were a subdomain of the original site. So essentially \
    there was a list of the one million top-level domains to be visited and each thread of our program \
    would take one of those, parse it, discard all links going to different top-level domains, and repeat \
    until it ran out of links to check. Once this happened, it would move to the next domain in the list \
    and start over. Due to our resource limitations, we used 50 concurrent threads for most of our crawling.</p>\
    <p>To lower the size of the database we decided to only capture the titles and headers from each page and \
    store those so they could be queried by the search engine. After the frontend was built, when the user would \
    type in a query the database would for a matching string with wildcard characters on each side and return the \
    list of sites that had a match. There is still much optimization to be done in the way that results are \
    returned for queries as requiring a 1:1 string match returns less results overall that could have been useful \
    than if there is more built-in flexibility in the way the actual meaning of a query is determined.</p>\
    <p>There is still a lot of work to be done to improve the details of how the search engine returns results, \
    but for simple queries it works very well, and the GUI was simple and responsive.</p>",
    references: `
    <ul>
        <li><a href="https://github.com/ethanreddick/search">Search Github Repo</a></li>
        <li><a href="https://tranco-list.eu/list/25G99/1000000">Top One Million Domains</a></li>
        <li><a href="https://github.com/remram44/python-bloom-filter">Bloom Filter Used</a></li>
    </ul>
    `,
    imageName: "icons/search.png", // image source: https://www.freeiconspng.com/img/2271
    projectImages: ["projectGallery/Search/SearchDemo.mp4"],
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
    references: `
    <ul>
        <li><a href="LINK">TEXT</a></li>
    </ul>
    `,
    imageName: "icons/pi.png", // image source: https://iconduck.com/icons/14184/raspberry-pi
    projectImages: [""],
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
      '<p>AdGuard is a versatile ad-blocking software intended to remove ads from web pages, block malicious sites, and prevent tracking\
      by online marketers. It runs as a service on my <a href="../projects/NAS/">NAS</a> and I set my router’s default DNS server as the address of the AdGuard service.</p>\
      <p>This enables AdGuard to see all domains requested by devices on my network and compare them against its rule base. If the domain is to be blocked,\
      AdGuard simply responds to the device’s DNS request with an address of 0.0.0.0, and if the domain is allowed AdGuard forwards the request to an upstream\
      DNS resolver such as Cloudflare’s 1.1.1.1 or Google’s 8.8.8.8. These systems in-turn respond with the address of the requested resource with AdGuard\
      passes back to the requesting device.</p>\
      <p>By blocking unwanted content at the DNS level AdGuard can reduce network congestion and decrease loading times for certain resources.</p>',
    references: `
      <ul>
          <li><a href="https://adguard.com/en/adguard-home/overview.html">AdGuard Home Overview</a></li>
      </ul>
      `,
    imageName: "icons/adguard.png", // image source: https://iconduck.com/icons/252880/adguard-home
    projectImages: [
      "projectGallery/AdGuard/AdGuardBlocklists.png",
      "projectGallery/AdGuard/AdGuardBlocklists.png",
    ],
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
    references: `
    <ul>
        <li><a href="LINK">TEXT</a></li>
    </ul>
    `,
    imageName: "icons/popos.png", // image source: https://iconduck.com/icons/64969/pop-os
    projectImages: [""],
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
    references: `
    <ul>
        <li><a href="LINK">TEXT</a></li>
    </ul>
    `,
    imageName: "icons/syncthing.png", // image source: https://commons.wikimedia.org/wiki/File:SyncthingAugustLogo.png
    projectImages: [""],
    created: "July 24th, 2023",
    updated: "July 26th, 2023",
  },

  // Add more projects here
];
