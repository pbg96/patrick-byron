function Footerlinks(props) {
    return (
        <>
            <a href={props.url} className={props.class}>{props.sitename}</a>
        </>
    );
  }

export default Footerlinks