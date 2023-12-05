import * as React from "react";
import Box from "@mui/material/Box";
import { useSpring, animated } from "@react-spring/web";
import SvgIcon from "@mui/material/SvgIcon";
import Collapse from "@mui/material/Collapse";
import { alpha, styled } from "@mui/material/styles";
import { TreeView } from "@mui/x-tree-view/TreeView";
import { TreeItem, treeItemClasses } from "@mui/x-tree-view/TreeItem";
import data from "../data/company.json";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

function MinusSquare(props) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
    </SvgIcon>
  );
}

function PlusSquare(props) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
    </SvgIcon>
  );
}

function CloseSquare(props) {
  return (
    <SvgIcon
      className="close"
      fontSize="inherit"
      style={{ width: 14, height: 14 }}
      {...props}
    >
      <path d="M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z" />
    </SvgIcon>
  );
}

function TransitionComponent(props) {
  const style = useSpring({
    to: {
      opacity: props.in ? 1 : 0,
      transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
    },
  });

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  );
}

const CustomTreeItem = React.forwardRef((props, ref) => (
  <TreeItem {...props} TransitionComponent={TransitionComponent} ref={ref} />
));

const StyledTreeItem = styled(CustomTreeItem)(({ theme }) => ({
  [`& .${treeItemClasses.iconContainer}`]: {
    "& .close": {
      opacity: 0.3,
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 15,
    paddingLeft: 18,
    borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
  },
  padding: "10px",
}));

export default function CustomizedTreeView() {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          margin: "50px auto",
          backgroundColor: "#f5f5f5",
          color: "#181818",
          boxShadow: "0 0 50px #B0C4DE",
          width: "600px",
          border: "5px solid #e4e4e4",
          borderRadius: "10px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TreeView
              aria-label="customized"
              defaultExpanded={["1"]}
              defaultCollapseIcon={<MinusSquare />}
              defaultExpandIcon={<PlusSquare />}
              defaultEndIcon={<CloseSquare />}
              sx={{
                overflowX: "hidden",
                maxWidth: "600px",
                maxHeight: "90vh",
                textAlign: "left",
                color: "D6E1FD",
              }}
            >
              <StyledTreeItem nodeId="0" label="Company">
                {data.map((d, i) => (
                  <>
                    <StyledTreeItem nodeId={i + 1} label={d.title}>
                      <StyledTreeItem
                        nodeId={i + data.length + 1}
                        label={`Address : ${d.address}`}
                      />
                      <StyledTreeItem
                        nodeId={i + data.length * 2 + 1}
                        label={"Contact"}
                      >
                        {d &&
                          d.poc &&
                          d.poc.map((poc) => (
                            <StyledTreeItem
                              nodeId={i + data.length * 3 + 1}
                              label={`Name: ${poc.name} 
                                        Mobile: ${poc.mobile}`}
                            />
                          ))}
                      </StyledTreeItem>
                      <StyledTreeItem
                        nodeId={i + data.length * 4 + 1}
                        label={
                          <Link to={`${d.id}`}>
                            <div>Employee Details</div>
                          </Link>
                        }
                      />
                    </StyledTreeItem>
                  </>
                ))}
              </StyledTreeItem>
            </TreeView>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
