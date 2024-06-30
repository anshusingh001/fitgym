import React from 'react';
import { useContext } from 'react';
import { ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { Box, Typography } from '@mui/material';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
       <FaArrowLeft/>
      </Typography>
    );
  };
  
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollNext()} className="left-arrow">
        <FaArrowRight/>
      </Typography>
    );
  };
  
  const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
          m="0 40px"
          
        >
          {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} /> }
        </Box>
      ))}
    </ScrollMenu>
  );
  
export default HorizontalScrollbar;
