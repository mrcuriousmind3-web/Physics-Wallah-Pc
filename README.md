# Physics Wallah for PC

An **unofficial desktop wrapper** that opens the official Physics Wallah website in a dedicated desktop window. It does not copy, host, or redistribute Physics Wallah's website or course content.

> Community-made and not affiliated with, endorsed by, or supported by Physics Wallah.

## Features
- Dedicated app window for [Physics Wallah](https://www.pw.live/)
- Windows x64 installer (.exe)
- Linux Debian packages (.deb) for x64/amd64 and arm64, plus AppImage builds
- Secure Electron defaults: context isolation enabled and Node integration disabled
- Automated builds using GitHub Actions

## Get installers
Open the repository's **Actions** tab, select the latest successful **Build desktop installers** run, and download the relevant artifact. Each run creates Windows and Linux installers. ARM64 packages are for ARM64 Linux devices; amd64/x64 packages are for standard 64-bit Intel/AMD Linux PCs.

## Run from source
Requirements: Node.js 22+ and npm.

```bash
npm install
npm start
```

Build a Windows installer on Windows:
```bash
npm run dist:win
```

Build Linux packages on Linux:
```bash
npm run dist:linux
```

Files are generated in `dist/`. Internet access is required to use the website. Log in only through the official website. Installer signing is not configured, so Windows may display a SmartScreen warning for an unsigned installer.

## License and trademarks
The wrapper source is MIT-licensed. Physics Wallah names, logos, trademarks, website and course content belong to their respective owners.
