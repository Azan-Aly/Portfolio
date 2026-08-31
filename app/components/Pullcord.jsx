"use client";

import { PullCord } from 'pullcord';
import 'pullcord/pullcord.css';

export default function Pullcord({ config, theme, onToggle }) {
  const isDark = theme === 'dark';

  return (
    <PullCord
      config={{
        gravity: 1200,
        damping: 0.93,
        iterations: 20,
        stretchMax: 32,
        ...config,
      }}
      onPull={onToggle}
      pulled={isDark}
      ariaLabel="Toggle theme pullcord"
    />
  );
}
