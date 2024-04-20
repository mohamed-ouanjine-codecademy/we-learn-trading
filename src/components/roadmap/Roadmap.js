import React, { useState, useEffect } from 'react';
import Section from './components/Section';

function RoadMap() {
  const [roadmapData, setRoadmapData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/roadmapData.json');
        const data = await response.json();
        setRoadmapData(data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container" style={{ minHeight: '100vh' }}>
      <div className='row mb-5'>
        <div className='col'>
          <h1>Technical Analysis Learning Plan</h1>
        </div>
      </div>
      <div className='row row-cols-1 g-5'>
        {roadmapData &&
          Object.entries(roadmapData).map(([sectionTitle, section], i) => (
            <div className='col'>
              <Section key={i} sectionTitle={sectionTitle} section={section} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default RoadMap;