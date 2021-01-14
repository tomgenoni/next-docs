export default function Button({ children }) {
  return (
    <button
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
