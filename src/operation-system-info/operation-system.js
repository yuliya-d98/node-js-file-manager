import printSystemEndOfLine from "./print-system-end-of-line.js";
import printSystemCPUsInfo from "./print-system-CPUs-info.js";
import printHomeDirectory from "./print-home-directory.js";
import printSystemUserName from "./print-system-user-name.js";
import printCPUArchitecture from "./print-CPU-architecture.js";

const operationSystem = (param) => {
  switch (param) {
      case '--EOL':
          printSystemEndOfLine();
          break;
      case '--cpus':
          printSystemCPUsInfo();
          break;
      case '--homedir':
          printHomeDirectory();
          break;
      case '--username':
          printSystemUserName();
          break;
      case '--architecture':
          printCPUArchitecture();
          break;
      default:
          console.log('Invalid input');
  }
}

export default operationSystem;