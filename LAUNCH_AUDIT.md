# Portfolio launch audit — November 19, 2026

All 20 listed projects returned HTTP 200 and opened their intended browser interface. Every listed project has an explicit HTTPS Launch destination. amirnet-studio remains excluded from both the saved snapshot and live repository refresh.

Checked launch navigation and initial UI; private-key AI generation and optional external account integrations were not exercised.

| Project | Launch | HTTP | Browser | Setup / scope |
|---|---|---|---|---|
| EdgePredict | [Launch](https://thefamousjc.github.io/EdgePredict/dist/) | 200 | Passed | No extra setup needed to open the interface |
| The Daily Baker | [Launch](https://thefamousjc.github.io/TheDailyBaker/docs/index.html) | 200 | Passed | Interactive browser demo; review decisions reset on refresh |
| Window · Where on Earth? | [Launch](https://window-by-3sci-labs.onrender.com/) | 200 | Passed | No extra setup needed to open the interface |
| Mariana OSINT | [Launch](https://mariana.ai.studio/) | 200 | Passed | Blueprint/investigation workspace opens; individual live connectors not tested |
| AxonPulse | [Launch](https://axonpulse-mvp.onrender.com/) | 200 | Passed | Public MVP interface; source private |
| Erroris | [Launch](https://thefamousjc.github.io/erroris/) | 200 | Passed | No extra setup needed to open the interface |
| VentureForge | [Launch](https://ventureforge-alpha.vercel.app/) | 200 | Passed | Gemini API key required for venture generation |
| Layover | [Launch](https://layover-guide.3sci-labs.workers.dev/) | 200 | Passed | Guide opens; driving estimates are not guarantees |
| What’s That Sound? | [Launch](https://thefamousjc.github.io/whats-that-sound/) | 200 | Passed | Gemini key for analysis; demo report available |
| Escape Atlas | [Launch](https://thefamousjc.github.io/world/) | 200 | Passed | No extra setup needed to open the interface |
| Orbit Games | [Launch](https://thefamousjc.github.io/classicgames/) | 200 | Passed | No extra setup needed to open the interface |
| Panorama | [Launch](https://thefamousjc.github.io/Panorama/) | 200 | Passed | No extra setup needed to open the interface |
| Reversium | [Launch](https://thefamousjc.github.io/reversium/web/) | 200 | Passed | No extra setup needed to open the interface |
| SubFinder | [Launch](https://thefamousjc.github.io/subfinder/?v=own-apps) | 200 | Passed | Sample demo works; email connections need visitor-owned OAuth setup |
| Content Repurposer | [Launch](https://thefamousjc.github.io/content-repurpose-tool/) | 200 | Passed | No extra setup needed to open the interface |
| What-If Scenario Simulator | [Launch](https://thefamousjc.github.io/what-if-scenario-calculator/) | 200 | Passed | No extra setup needed to open the interface |
| Competitor Shift Radar | [Launch](https://thefamousjc.github.io/competitor-shift-radar/) | 200 | Passed | Gemini key for AI; prompt export available |
| Devil’s Advocate Lab | [Launch](https://thefamousjc.github.io/devils_advocate/) | 200 | Passed | Gemini key for AI; prompt export available |
| Infographics Studio | [Launch](https://thefamousjc.github.io/infographics-studio/) | 200 | Passed | Gemini key for AI; manual editing available |
| Project Index | [Launch](https://thefamousjc-portfolio.3sci-labs.workers.dev/) | 200 | Passed | No extra setup needed to open the interface |

Changes: made all launch URLs explicit, standardized Launch labels, clarified VentureForge’s Gemini-key requirement, refreshed the offline snapshot, and added regression tests preventing fabricated launch addresses for unconfigured projects.
