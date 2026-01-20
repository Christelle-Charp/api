import { exec } from "child_process";

export default function deploy() {
  return new Promise((resolve, reject) => {
    exec("/usr/local/bin/deploy-portfolio.sh", (error, stdout, stderr) => {
      if (error) {
        console.error("Deploy error:", error);
        return reject(error);
      }

      console.log("Deploy output:", stdout);
      resolve(stdout);
    });
  });
}