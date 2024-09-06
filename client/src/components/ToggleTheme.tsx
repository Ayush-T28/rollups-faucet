import "./styles/ToggleTheme.css";

function ToggleTheme(props: any) {
  function changeTheme() {
    if (props.theme === "light") {
      props.setTheme("dark");
    } else {
      props.setTheme("light");
    }
  }

  const icon = props.theme === "light" ? "/dark.svg" : "/light.svg";

  return (
    <button className="toggle-theme-icon">
      <img src={icon} onClick={changeTheme} />
    </button>
  );
}

export default ToggleTheme;
