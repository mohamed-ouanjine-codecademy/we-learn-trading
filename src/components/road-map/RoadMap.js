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
          <h1>
            {
              (() => {
                switch (selectedPlan) {
                  case 'technicalAnalysis':
                    return 'Technical Analysis';
                  case 'priceAction':
                    return 'Price Action';
                  case 'smc':
                    return 'SMC (Smart Money Concept)';
                  case 'ict':
                    return 'ICT (Inner Circle Trader)';
                  default:
                    return '';
                }
              })()
            }
            Learning Plan</h1>
        </div>
        <div className='col'>
          <select value={selectedPlan} onChange={handlePlanChange} className="form-select">
            <option value="technicalAnalysis">Technical Analysis</option>
            <option value="priceAction">Price Action</option>
            <option value="smc">SMC (Smart Money Concept)</option>
            <option value="ict">ICT (Inner Circle Trader)</option>
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