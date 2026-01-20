import { exec } from "child_process";

export default function deploy(): Promise<void> {
  return new Promise((resolve, reject) => {
    const commands = `
      cd /srv/portfolio &&
      git pull &&
      docker build -t portfolio:latest . &&
      docker stop portfolio-christelle || true &&
      docker rm portfolio-christelle || true &&
      docker run -d --name portfolio-christelle -p 3001:3000 portfolio:latest
    `;

    exec(commands, (error, stdout, stderr) => {
      if (error) {
        console.error("Deploy error:", stderr);
        return reject(error);
      }

      console.log("Deploy output:", stdout);
      resolve();
    });
  });
}