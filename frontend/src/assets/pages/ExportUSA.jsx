import React from 'react';
import ExportHubPage from './ExportHubPage.jsx';

// /export/usa/ is the import guide for US buyers; /export/united-states/ is the supplier hub.
// Content for both lives in data/exportHubContent.js.
const ExportUSA = () => <ExportHubPage slugOverride="usa" />;

export default ExportUSA;
