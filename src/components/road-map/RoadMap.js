import React, { useState, useEffect } from 'react';
import Section from './components/Section';

function RoadMap() {
  const [roadmapData, setRoadmapData] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState('technicalAnalysis');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/data/${selectedPlan}Plan.json`);
        const data = await response.json();
        setRoadmapData(data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [selectedPlan]);

  const handlePlanChange = (event) => {
    setSelectedPlan(event.target.value);
  };

  return (
    <div className="container" style={{ minHeight: '100vh' }}>
      <div className='row mb-5'>
        <div className='col'>
          <h1>{selectedPlan === 'technicalAnalysis' ? 'Technical Analysis Learning Plan' : 'SMC Learning Plan'}</h1>
        </div>
        <div className='col'>
          <select value={selectedPlan} onChange={handlePlanChange} className="form-select">
            <option value="technicalAnalysis">Technical Analysis</option>
            <option value="smc">Smart Money Concept (SMC)</option>
          </select>
        </div>
      </div>
      <div className='row row-cols-1 g-5'>
        {roadmapData &&
          Object.entries(roadmapData).map(([sectionTitle, section], i) => (
            <div className='col' key={i}>
              <Section sectionTitle={sectionTitle} section={section} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default RoadMap;