import React from 'react';
import { Box, Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';

type Props = {
    text: string;
    icon: React.ReactNode;
    color?: string;
    variant?:Variant;

};

const EmptyViews: React.FC<Props> = ({ text, icon, color = '#D9D9D9', variant = 'h4' }) => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center" >
            {icon}
            <Typography variant={variant}  fontWeight={700} color={color} marginBlock={2}>
                {text}
            </Typography>
        </Box>
    );
};

export default EmptyViews;
