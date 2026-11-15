const fs = require('fs');
const path = require('path');

// ==========================================
// SPREAD 12 (Pages 23 & 24)
// Topic: Steganography, Steganalysis & Challenges, Covert Channels & Advanced Recon
// Questions: Q111 to Q120
// ==========================================

const spread12Left = `<div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 12 • Steganography & Steganalysis</span>
      <h2>Steganography Carriers, Steganalysis Methods & Its Forensic Challenges</h2>
    </div>
    <p>While cryptography scrambles message <em>content</em> (making it unreadable), <strong>Steganography</strong> ("covered writing") conceals the <em>very existence</em> of the communication inside an innocent carrier medium (digital image, audio track, video file, or network packet).</p>

    <div class="section-block">
      <span class="section-label">1. Steganography Mechanisms: Spatial vs. Frequency Domain</span>
      <p>Data hiding techniques depend on the carrier medium format:</p>
      
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">Spatial Domain LSB</span>
            <span class="statute-tag">Least Significant Bit</span>
          </div>
          <p>Hides secret bits by replacing the lowest bit (LSB) of raw pixel color bytes in uncompressed images (24-bit BMP or PNG).</p>
          <p><strong>Impact:</strong> Modifies pixel color by at most 1/255th, completely imperceptible to the human visual system (HVS).</p>
          <p><strong>Forensic Analysis Tools (Q113):</strong> <strong>Stegsolve</strong> and <strong>zsteg</strong> evaluate individual bit-planes, extract LSB payloads, and reveal hidden spatial anomalies.</p>
        </div>

        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">Frequency Domain (DCT)</span>
            <span class="statute-tag">JPEG Compression</span>
          </div>
          <p>Operates inside lossy compressed images (JPEG). Secret bits are embedded into the quantized <strong>Discrete Cosine Transform (DCT)</strong> coefficients of 8&times;8 pixel blocks (tools like <em>Jsteg</em>, <em>F5</em>, <em>OutGuess</em>).</p>
          <p><strong>Advantage:</strong> Highly resilient against image cropping, recompression, and visual inspection.</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Steganalysis Techniques & Its Core Forensic Challenges</span>
      <p><strong>Steganalysis</strong> is the forensic discipline of detecting, extracting, or destroying hidden payloads inside carrier files:</p>
      <ul>
        <li><strong>Statistical Steganalysis:</strong>
          <ul>
            <li><strong>Chi-Square (&chi;<sup>2</sup>) Attack:</strong> Detects LSB replacement by analyzing Pairs of Values (PoVs, e.g. 2k and 2k+1) in pixel histograms. LSB embedding unnaturally equalizes adjacent color frequency distributions!</li>
            <li><strong>Sample Pair Analysis (SPA):</strong> Evaluates spatial correlations between adjacent pixels to estimate the exact hidden message length.</li>
          </ul>
        </li>
        <li><strong>Forensic Challenges of Steganalysis:</strong>
          <ul>
            <li><strong>Lossy Compression Artifacts:</strong> JPEG and MP3 re-encoding destroys LSB data, confusing forensic scanners.</li>
            <li><strong>Encrypted Payloads:</strong> Attackers encrypt the payload before embedding; the payload resembles random white noise, blending into natural sensor noise.</li>
            <li><strong>High False-Positive Rates:</strong> Natural camera sensor variations frequently trigger false alarms in automated forensic triage tools.</li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="section-block">
      <span class="section-label">3. Network Steganography & Covert Channels (Q111, Q112)</span>
      <p>Adversaries manipulate standard network protocols to establish stealthy exfiltration pathways:</p>
      
      <div class="statutory-grid">
        <div class="statute-card card-emerald">
          <div class="statute-header">
            <span class="statute-section">TCP/IP Header Steganography (Q111)</span>
            <span class="statute-tag">Protocol Abuse</span>
          </div>
          <p>Encodes secret payload bytes into unused or variable header fields: the <strong>TCP Initial Sequence Number (ISN)</strong>, the <strong>Urgent Pointer</strong>, or the <strong>IP Identification (IP ID)</strong> field.</p>
        </div>

        <div class="statute-card card-amber">
          <div class="statute-header">
            <span class="statute-section">DNS Tunneling Exfiltration (Q112)</span>
            <span class="statute-tag">Firewall Bypass</span>
          </div>
          <p>Encodes sensitive data into subdomains of recursive DNS queries (e.g. <code>637265646974.attacker.com</code>).</p>
          <p>Because firewalls allow outbound port 53 traffic, tools like <strong>iodine</strong> and <strong>dnscat2</strong> establish full bidirectional C2 tunnels over DNS!</p>
        </div>
      </div>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 1 (Q111–Q113):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>TCP Header Steganography (Q111):</strong> Encodes data in the <strong>TCP Initial Sequence Number (ISN)</strong>, Urgent Pointer, or IP ID fields.</li>
        <li><strong>DNS Tunneling (Q112):</strong> Encodes sensitive internal data into subdomains of DNS query packets to bypass firewalls (tools: <strong>dnscat2, iodine</strong>).</li>
        <li><strong>Stegsolve & zsteg (Q113):</strong> Open-source forensic tools for analyzing image bit-planes and extracting LSB payloads from PNG/BMP files.</li>
      </ul>
    </div>`;

const spread12Right = `<div class="legal-dispatch-header">
      <span class="badge-primary">Chapter 12 • Active Reconnaissance & Network Attacks</span>
      <h2>Passive vs. Active Reconnaissance, Advanced Nmap Scans & ARP Poisoning</h2>
    </div>
    <p>Penetration testers begin active intelligence gathering by identifying exposed assets, enumerating services, and manipulating network layer protocols.</p>

    <div class="section-block">
      <span class="section-label">1. Passive vs. Active Reconnaissance & OSINT Tools (Q114, Q115, Q116)</span>
      <p>Reconnaissance represents the initial phase of every cyber engagement:</p>
      
      <div class="procedure-table-wrapper">
        <table class="procedure-table">
          <thead>
            <tr>
              <th>Reconnaissance Class</th>
              <th>Operational Methodology (Q114)</th>
              <th>Key Tools & Protocols Used</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Passive Reconnaissance (Q114)</strong></td>
              <td>Gathers intelligence <strong>WITHOUT interacting or sending traffic</strong> directly to the target systems. Completely undetectable by the victim's intrusion detection systems (IDS).</td>
              <td><strong>Shodan / Censys (Q115):</strong> Search engines that index Internet-connected devices, IoT webcams, industrial control systems (ICS), and open ports via continuous Internet scans.<br>Public search engines, WHOIS, certificate transparency logs.</td>
            </tr>
            <tr>
              <td><strong>Active Reconnaissance (Q114)</strong></td>
              <td>Sends packets directly to probe target systems, network firewalls, and server ports. Yields rich data but gets logged by target firewalls.</td>
              <td><strong>DNS Zone Transfer (AXFR) (Q116):</strong> A DNS query (<code>type=AXFR</code>) attempting to download the entire zone file (all registered hostnames and IP addresses) from a misconfigured DNS server.<br>Port scanners (Nmap), web crawlers, vulnerability probes.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">2. Advanced Nmap Stealth Scanning Techniques (Q117, Q118, Q119)</span>
      <p>When firewalls block standard SYN scans, penetration testers utilize exotic TCP flag combinations:</p>
      
      <div class="statutory-grid">
        <div class="statute-card card-teal">
          <div class="statute-header">
            <span class="statute-section">TCP Xmas Scan (-sX) (Q117)</span>
            <span class="statute-tag">All Lights Lit</span>
          </div>
          <p>Sets the <strong>FIN, PSH, and URG flags simultaneously</strong>, lighting up the packet "like a Christmas tree". Under RFC 793, closed ports reply with RST; open ports silently drop the packet.</p>
        </div>

        <div class="statute-card card-purple">
          <div class="statute-header">
            <span class="statute-section">TCP Null Scan (-sN) (Q118)</span>
            <span class="statute-tag">Zero Flags</span>
          </div>
          <p>Sends a TCP packet with <strong>absolutely zero control flags set (all bits = 0)</strong>. Bypasses naive stateless packet filters that only inspect incoming SYN packets.</p>
        </div>

        <div class="statute-card card-emerald">
          <div class="statute-header">
            <span class="statute-section">TCP Idle Scan (-sI) (Q119)</span>
            <span class="statute-tag">Zombie Blind Scan</span>
          </div>
          <p>The ultimate blind stealth scan: bounces probes off a third-party <strong>"zombie" host</strong> and observes predictable <strong>IP ID sequence increments</strong>. The target never sees the attacker's real IP address!</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <span class="section-label">3. Layer 2 Network Attacks: ARP Spoofing / Poisoning (Q120)</span>
      <p>Because the Address Resolution Protocol (ARP) lacks authentication, any device on a local subnet can broadcast forged ARP replies:</p>
      
      <div class="alert-box">
        <strong>ARP Cache Poisoning Mechanics (Q120):</strong>
        <p>The attacker transmits forged ARP messages claiming their MAC address belongs to the <strong>Default Gateway IP</strong>. Surrounding workstations update their local ARP caches and redirect all outbound Internet traffic straight to the attacker!</p>
        <p><strong>Impact:</strong> Enables full Man-in-the-Middle (MitM) packet sniffing, session hijacking, and SSL stripping (using tools like <em>Ettercap</em> and <em>Bettercap</em>).</p>
      </div>
    </div>

    <div class="exam-trap-box">
      <strong>🎯 DSSSB Exam Cheat Sheet — Part 2 (Q114–Q120):</strong>
      <ul style="margin: 6px 0 0 18px; padding: 0;">
        <li><strong>Passive vs. Active Recon (Q114):</strong> Passive gathers data without sending traffic to target; Active sends direct packets to probe assets.</li>
        <li><strong>Shodan (Q115):</strong> Search engine indexing Internet-connected IoT devices, webcams, and ICS systems.</li>
        <li><strong>DNS Zone Transfer (Q116):</strong> Uses <code>AXFR</code> query type to dump all hostnames and IP records from an authoritative DNS server.</li>
        <li><strong>-sX Xmas Scan (Q117):</strong> Sets <strong>FIN, PSH, and URG</strong> flags simultaneously.</li>
        <li><strong>-sN Null Scan (Q118):</strong> Sends packets with <strong>zero control flags set</strong> (all flags = 0).</li>
        <li><strong>-sI Idle Scan (Q119):</strong> Uses a blind third-party <strong>zombie host</strong> and monitors IP ID increments.</li>
        <li><strong>ARP Spoofing (Q120):</strong> Forges Layer 2 ARP messages to map attacker's MAC address to the default gateway IP.</li>
      </ul>
    </div>

    <div class="spread-quiz-cta-banner" style="margin-top: 18px; padding: 14px 18px; background: linear-gradient(135deg, rgba(30,58,138,0.06), rgba(16,185,129,0.08)); border: 1.5px solid #10b981; border-left: 5px solid #10b981; border-radius: 8px; display: flex; align-items: center; justify-content: space-between; gap: 14px;">
      <div style="display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 28px; line-height: 1;">🎯</span>
        <div>
          <div style="font-weight: 700; font-size: 0.95rem; color: #1e3a8a;">Test Your Mastery: Spread 12 (Q111–Q120)</div>
          <div style="font-size: 0.82rem; color: #475569; margin-top: 2px;">Practice all 10 high-yield questions on Steganography, Stegsolve, Shodan, Nmap Scans (-sX, -sN, -sI) & ARP Spoofing.</div>
        </div>
      </div>
      <button class="btn-cta-quiz" onclick="window.openMCQForSpread(11)" style="background: #047857; color: #ffffff; border: none; font-weight: 700; font-size: 0.85rem; padding: 8px 16px; border-radius: 6px; cursor: pointer; white-space: nowrap; box-shadow: 0 2px 6px rgba(4,120,87,0.25);">
        Practice Questions (Q111–Q120) &rarr;
      </button>
    </div>`;

// Update book5_data.js
const bookPath = path.resolve(__dirname, '../book5_data.js');
global.window = {};
require(bookPath);

// Spread index 11 is Spread 12 (Pages 23 and 24)
window.book5Data.spreads[11].left.content = spread12Left;
window.book5Data.spreads[11].right.content = spread12Right;
window.book5Data.spreads[11].left.runningHead = "CH. 12 • STEGANOGRAPHY & STEGANALYSIS";
window.book5Data.spreads[11].right.runningHead = "CH. 12 • RECONNAISSANCE & ARP SPOOFING";

const updatedJs = '// Book 5 Data: Information Security, Applied Cryptography & VAPT\nwindow.book5Data = ' + JSON.stringify(window.book5Data, null, 2) + ';\n';
fs.writeFileSync(bookPath, updatedJs, 'utf8');
console.log('Successfully updated book5_data.js spread 12 (Pages 23 & 24)!');

