import React from 'react';
import './dashboard.css';

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard">
            <nav className="sidebar">
                <ul>
                    
                </ul>
            </nav>
            <main className="main-content">
                <h1>Dashboard Content</h1>
                {/* Dashboard content goes here */}
            </main>
        </div>
    );
};

export default Dashboard;
