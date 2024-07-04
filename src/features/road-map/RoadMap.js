import React, { useEffect } from 'react';
import Section from './components/Section';
import { useDispatch, useSelector } from 'react-redux';
import { setPlan, getRoadMap } from './RoadMapSlice';
import Spinner from '../../components/Spinner';

function RoadMap() {
  const dispatch = useDispatch();
  const roadmapData = useSelector((state) => state.roadMap.roadMap);
  const selectedPlan = useSelector((state) => state.roadMap.plan);
  const isPending = useSelector((state) => state.roadMap.getRoadMap.isPending);
  const isRejected = useSelector((state) => state.roadMap.getRoadMap.isRejected);

  useEffect(() => {
    if (selectedPlan) {
      dispatch(getRoadMap(selectedPlan));
    }
  }, [selectedPlan, dispatch]);

  const handlePlanChange = (event) => {
    dispatch(setPlan(event.target.value));
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
                    return 'Technical Analysis ';
                  case 'priceAction':
                    return 'Price Action ';
                  case 'smc':
                    return 'SMC (Smart Money Concept) ';
                  case 'ict':
                    return 'ICT (Inner Circle Trader) ';
                  default:
                    return '';
                }
              })()
            }
            Learning Plan
          </h1>
        </div>
        <div className='col'>
          <select value={selectedPlan} onChange={handlePlanChange} className="form-select">
            <option value="technicalAnalysis">Technical Analysis</option>
            <option value="smc">SMC (Smart Money Concept)</option>
            <option value="ict">ICT (Inner Circle Trader)</option>
          </select>
        </div>
      </div>
      <div className='row row-cols-1 g-5'>
        {isPending && (
          <div className='col-12 d-flex justify-content-center'>
            <Spinner />
          </div>
        )}
        {isRejected && <p>Error loading roadmap data</p>}
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
