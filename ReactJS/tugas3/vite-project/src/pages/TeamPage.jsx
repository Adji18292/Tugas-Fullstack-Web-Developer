import contactImage from '../23040700073 (1).jpg';

function TeamPage() {
  return (
    <div className="container px-4 py-5" id="team">
      <h2 className="pb-2 border-bottom text-center">Our Team</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3 shadow rounded-3">
        {/* Team Member 1 */}
        <div className="col d-flex align-items-start">
          <div className="text-center w-100">
            <img src="https://i.pravatar.cc/150?img=1" className="rounded-circle mb-3" alt="Team Member 1" width="140" height="140" />
            <h4 className="fw-bold mb-0">John Doe</h4>
            <p>Lead Developer</p>
          </div>
        </div>

        {/* Team Member 2 */}
        <div className="col d-flex align-items-start">
          <div className="text-center w-100">
            <img src={contactImage} className="rounded-circle mb-3" alt="Team Member 2" width="140" height="140" />
            <h4 className="fw-bold mb-0">Adji Saputra</h4>
            <p>UI/UX Designer</p>
          </div>
        </div>

        {/* Team Member 3 */}
        <div className="col d-flex align-items-start">
          <div className="text-center w-100">
            <img src="https://i.pravatar.cc/150?img=3" className="rounded-circle mb-3" alt="Team Member 3" width="140" height="140" />
            <h4 className="fw-bold mb-0">Peter Jones</h4>
            <p>Project Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamPage;