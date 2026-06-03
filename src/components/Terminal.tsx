
import MainContent from './MainContent.tsx';
import TitleBar from './TitleBar.tsx';

export default function Terminal() {
  return (
    <div
      className="screen"
      style={{ fontSize: '14px' }}
      role="application"
      aria-label="Terminal portfolio"
    >
      <div className="frame">
        <TitleBar />
        <MainContent />
      </div>
    </div>
  )
}
