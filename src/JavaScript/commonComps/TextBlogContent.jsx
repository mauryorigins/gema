// ---Others
import logo from '../../Images/logo-full.png';
import { ownerData } from '../Others/store-config';

// ------------------------------------------ COMPONENT-----------------------------------------
export default function TextBlogContent (props) {
  const { title, detail } = props
  return (
    <section>
      <h2><span>{title}</span></h2>
      <article>
        {detail}
      </article>
      <img src={logo} alt={ownerData.domain} />
    </section>
  );
}