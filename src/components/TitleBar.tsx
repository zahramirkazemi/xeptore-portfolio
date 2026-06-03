import { CV } from '../core/data.ts';
import Clock from './Clock.tsx';


const TitleBar = () => (<div className="titlebar" aria-label="Terminal title bar">
  <span className="tb-dots" aria-hidden="true">
    <i />
    <i />
    <i />
  </span>
  <span className="tb-path">
    {CV.handle}@portfolio: <b>~/session</b>
  </span>
  <span className="tb-spacer" />
  <span className="tb-stat">
    exp:<b>timeline</b>
  </span>
  <span className="tb-live" aria-label="Status: online">
    online
  </span>
  <span className="tb-stat" style={{ minWidth: 64, textAlign: 'right' }}>
    <Clock />
  </span>
</div>
);

export default TitleBar;
