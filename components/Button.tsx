interface PropTypes {
  /**
   * Text content to render.
   */
  theme: 'foo';
  /**
   * Text content to render.
   */
  children: string
}

const Button: React.FC<PropTypes> = ({children, theme}: PropTypes) => {
  return (
    <button
      className={theme}
      style={{
        padding: '8px 16px',
        background: 'blue',
        color: 'white',
        border: 'none',
        borderRadius: 4,
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontWeight: 700,
      }}
    >
      {children}
    </button>
  );
}

export default Button;