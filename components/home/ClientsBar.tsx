const clients = [
  'ICAD III', 'Khalifa School', 'EWEC', 'Abu Dhabi Gov',
  'AlFardan Group', 'NMC Healthcare', 'TAQA Group', 'Dubai SME',
];

export default function ClientsBar() {
  return (
    <div className="clients-bar">
      <div className="container">
        <p className="clients-label">Trusted by leading organizations across UAE</p>
        <div className="clients-logos">
          {clients.map(name => (
            <div key={name} className="client-chip">{name}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
