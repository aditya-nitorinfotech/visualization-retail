import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ReceiptIcon from "@mui/icons-material/Receipt";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
// import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import PieChart from "../../components/PieChart";
import axios, { AxiosHeaders } from "axios";
import DatePickerViews from "../../components/DatePicker";
import StorePicker from "../../components/StorePicker";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [lineChartData, setLineChartData] = useState<any>();

  useEffect(() => {
    // (async () => {
    //   const url = "http://localhost:5000/store/5/department-sales";
    //   const response = await axios.get(url);
    //   setLineChartData(response);
    // })();
  }, []);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="DASHBOARD"
          subtitle="Welcome to order fulfillment dashboard"
        />

        <Box>
          <Button
            sx={{
              backgroundColor:
                theme.palette.mode === "dark"
                  ? colors.blueAccent[700]
                  : colors.greenAccent[500],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Chart
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          sx={{
            gridColumn: "span 6",
            backgroundColor: colors.primary[400],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <StatBox
            title="92%"
            subtitle="Orders on time"
            progress="0.92"
            increase="+14%"
            icon={
              <TrendingUpIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          sx={{
            gridColumn: "span 6",
            backgroundColor: colors.primary[400],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <StatBox
            title="97%"
            subtitle="Order fill rate"
            progress="0.97"
            increase="+21%"
            icon={
              <CheckCircleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        {/* <Box
          sx={{
            gridColumn: "span 3",
            backgroundColor: colors.primary[400],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          sx={{
            gridColumn: "span 3",
            backgroundColor: colors.primary[400],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box> */}

        {/* ROW 2 */}
        <Box
          sx={{
            gridColumn: "span 12",
            gridRow: "span 2",
            backgroundColor: colors.primary[400],
          }}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h4"
                fontWeight="bold"
                color={colors.greenAccent[500]}
                marginLeft="7%"
              >
                $59,342.32
              </Typography>
              <div style={{ marginTop: "-2.5%", marginLeft: "10%" }}>
                <DatePickerViews sizeProp={"small"} />
              </div>
              <div style={{ marginTop: "-2.5%", marginLeft: "5%" }}>
                <StorePicker />
              </div>
            </Box>
            {/* <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box> */}
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
            {/* <BarChart isDashboard={true} /> */}
          </Box>
        </Box>
        {/* <Box
          sx={{
            gridColumn: "span 4",
            gridRow: "span 2",
            backgroundColor: colors.primary[400],
            overflow: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: `4px solid ${colors.primary[500]}`,
              colors: colors.grey[100],
              p: "15px",
            }}
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  p: "5px 10px",
                  borderRadius: "4px",
                }}
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box> */}

        {/* ROW 3 */}
        {/* <Box
          sx={{
            gridColumn: "span 4",
            gridRow: "span 2",
            backgroundColor: colors.primary[400],
            p: "30px",
          }}
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box> */}
        <Box
          sx={{
            gridColumn: "span 6",
            gridRow: "span 2",
            backgroundColor: colors.primary[400],
          }}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          sx={{
            gridColumn: "span 6",
            gridRow: "span 2",
            backgroundColor: colors.primary[400],
            padding: "30px",
          }}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Language Based
          </Typography>
          <Box height="250px">
            <PieChart />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
