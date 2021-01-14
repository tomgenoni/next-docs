export default function Tag({ children }) {
  return (
    <div
      style={{
        padding: '0 12px',
        fontSize: 12,
        background: '#2cbbbb',
        color: 'white',
        border: 'none',
        fontFamily: 'inherit',
        borderRadius: '13px',
        display: 'inline-block',
        fontWeight: 500,
        textTransform: 'uppercase',
      }}
    >
      {children}
    </div>
  );
}
