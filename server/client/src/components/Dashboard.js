import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
  width: 70px;
  height: 70px;
  padding: 10px 16px;
  font-size: 24px;
  line-height: 1.33;
  border-radius: 35px;
  position: absolute;
  bottom: 30px;
  right: 30px;
`;

const Dashboard = () => {
  return (
    <div>
      Dashboard
      <Link to="/surveys/new">
        <Button type="button" className="btn btn-danger btn-circle btn-lg">
          <i className="glyphicon glyphicon-plus" />
        </Button>
      </Link>
    </div>
  );
};

export default Dashboard;
