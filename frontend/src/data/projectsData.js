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
      "projectGallery/NAS/NAS1.png",
      "projectGallery/NAS/NAS2.png",
      "projectGallery/NAS/NAS3.png",
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
    descriptionLong:
      '<p>To get some hands-on practice monitoring my home network and to be able to see the attacks I \
    conducted against my own devices from the perspective of a network defender, I installed Wazuh. \
    Wazuh is free and open-source, and setup was super easy.</p>\
    <p>The setup effectively contains two parts—one for the Wazuh server and the other for each device \
    you intend to monitor on the network. To serve the Wazuh service to my network I created an Ubuntu VM \
    on my NAS. The Wazuh server has several components which can be read about \
    <a href="https://documentation.wazuh.com/current/getting-started/components/wazuh-server.html">here</a>.</p>\
    <p>Once the server is setup and running each client must go through the enrollment process. Wazuh has \
    streamlined this process, essentially you can just navigate to the “enroll new agent” section of the web \
    interface and enter the agent operating system, IP address, and the host name. Following this, a one-line \
    shell script is generated that is to be executed on the agent. If all the proper ports are open this should \
    be a very smooth process.</p>\
    <p>Once an agent is connected you can access its dashboard and see warnings and alerts it may have generated. \
    The dashboard can show information such as compliance assessments (with regards to PCI DSS, GDPR, HIPAA, \
    NIST 800-53, GPG13, and TSC), a breakdown of possible MITRE tactics being used on the network, and the results \
    of past vulnerability scans (automated vulnerability scans are disabled by default but I enabled them).</p>\
    <p>The main Wazuh dashboard provides access to classic SIEM information and provides a myriad of ways for \
    customizing how this data is visualized. Drilling down to a specific agent you can see all its relevant \
    events/compliance metrics and the results of automatic vulnerability scans should you choose to have enabled those. \
    These provide insight into work that should be done to harden the systems, and over time as these vulnerabilities \
    are worked through (starting with the most critical) the pass rate score of the system should naturally increase.</p>\
    <p>Another interesting functionality of Wazuh is the ability to orchestrate active response to threats. For example, \
    in the active response rules section of the configuration I added a rule that would automatically time out any IP \
    address for 5 minutes if the host attempted to SSH into a server on the network as a user that does not exist on that \
    system. </p>\
    ',
    references: `
    <ul>
        <li><a href="https://wazuh.com/">Wazuh</a></li>
        <li><a href="https://documentation.wazuh.com/current/getting-started/components/wazuh-server.html">Wazuh Server Setup</a></li>
    </ul>
    `,
    imageName: "icons/wazuh.png", // image source: https://en.wikipedia.org/wiki/File:Wazuh_blue.png
    projectImages: [
      "projectGallery/Wazuh/WazuhDashboard.png",
      "projectGallery/Wazuh/WazuhEvents.png",
    ],
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
    descriptionLong:
      '<p>I bought a Raspberry Pi 5 to host this website instead of paying for web hosting because \
    I wanted the experience of building and hosting a website from the ground up. Aside from availability \
    being lower since the site is hosted from a single location, I figured the web server could be more \
    responsive with these specs than if I had paid for the web hosting that was within my budget.</p>\
    <p>I disabled the Pi’s graphical interface and only access it via SSH using certificates I configured. \
    I simply pull down the website’s code from the \
    <a href="https://github.com/ethanreddick/ability-upgrade">GitHub repo</a> and run the web server from the Pi.</p>\
    <p>[Provide update once site is fully online]</p>\
    ',
    references: `
    <ul>
        <li><a href="https://github.com/ethanreddick/ability-upgrade">Site GitHub repo</a></li>
    </ul>
    `,
    imageName: "icons/pi.png", // image source: https://iconduck.com/icons/14184/raspberry-pi
    projectImages: [
      "projectGallery/RaspberryPi/RaspberryPi1.png",
      "projectGallery/RaspberryPi/RaspberryPi2.png",
    ],
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
    descriptionLong:
      "<p>After installing the computer I built for one of my grandparents I was given an older Acer laptop, \
    made around 2014. It was a machine they had used in the past that had grown too slow under the weight \
    of its Windows 10 operating system considering it was working with only 4 GB of RAM and a HDD.</p>\
    <p>As a fun experiment I decided to see what I could do to make this machine as capable as possible. \
    My first move was to replace the old HDD with an SSD I had laying around and to safely dispose of the HDD. \
    Next, I ordered a 16GB SODIMM stick at the correct speed/timing, to bump the machine up to 20GB of memory \
    and for only about $25.</p>\
    <p>My next move was to install Pop!_OS, a user-friendly Linux distro, onto the new SSD. After setup was \
    complete, I was very impressed with the responsiveness of the machine compared to how it had behaved before. \
    The only real deficiency remaining was the laptop battery which was operating at about 20% of its original \
    capacity. I decided to not fix this issue as the cost would have been much higher than the other upgrades, \
    and to instead continue to only use it around my house.</p>\
    <p>While troubleshooting issues as I expanded my home network shortly after this project, I got substantial \
    use out of the computer thanks to its ethernet port which my MacBook does not have. This was certainly a fun \
    dive into seeing how much I could revitalize an old machine with cost-effective upgrades and the use of \
    lightweight software.</p>\
    ",
    references: `
    <ul>
        <li><a href="https://pop.system76.com/">Pop!_OS</a></li>
    </ul>
    `,
    imageName: "icons/popos.png", // image source: https://iconduck.com/icons/64969/pop-os
    projectImages: [
      "projectGallery/PopOS/PopOS1.png",
      "projectGallery/PopOS/PopOS2.png",
    ],
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
    descriptionLong:
      '<p>While completing Google’s “Cybersecurity Specialization” on Coursera I decided I needed a new \
    system for keeping my notes so I could easily index through. I settled on <a href="https://obsidian.md/">Obsidian</a>, \
    and I found it was exactly what I had been looking for. I began entering my notes into it but later realized the \
    inconvenience of having to switch back to my MacBook (where I usually do my work) if I wanted to view or add to my \
    notes while using my PC.</p>\
    <p>Obsidian has a windows app as well, but the trouble now was synchronizing my notes—a service that Obsidian \
    themselves offer for $8 a month. This seemed a bit pricey to me, and considering I had recently built my \
    <a href="../projects/NAS/">NAS</a>, I figured there must be a way to synchronize my notes for free.</p>\
    <p>This is where <a href="https://syncthing.net/">Syncthing</a> comes in, an open source continuous file \
    synchronization program. I installed clients on my Macbook, PC, and the NAS. The next step was to set the target \
    directory as the location where Obsidian stores notes (saved as markdown files), and to ensure the service would be \
    able to keep running in the background.</p>\
    <p>This resolved the need to synchronize my notes between my Mac and PC, with the added benefit of redundantly storing \
    my notes on the NAS as well. To bridge the gap between these devices and my iPhone where I also wanted to be able to view \
    my notes, I simply configured Obsidian on both my Apple devices to write their files to iCloud storage so the synchronization \
    would be handled automatically.</p>',
    references: `
    <ul>
        <li><a href="https://syncthing.net/">Syncthing</a></li>
        <li><a href="https://obsidian.md/">Obsidian</a></li>
    </ul>
    `,
    imageName: "icons/syncthing.png", // image source: https://commons.wikimedia.org/wiki/File:SyncthingAugustLogo.png
    projectImages: ["projectGallery/Syncthing/SyncthingInterface.png"],
    created: "July 24th, 2023",
    updated: "July 26th, 2023",
  },

  // Add more projects here
];
