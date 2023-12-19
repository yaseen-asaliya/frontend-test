import { Box, Typography } from '@mui/material';
import EmptyViews from '../../components/emptyViews/EmptyViews.componenet';
import NotFoundImage from '../../assets/images/NotFoundImage.componenet';
import localization from '../../../localizationConfig';
import { useEffect } from 'react';
import NavigationButton from '@/components/common/navigationButtons/NavigationButton.component';

const PageNotFound = () => {
    useEffect(() => {
        document.title = localization.pageNotFound;
    }, []);
    
    return (
        <Box display="flex" flexDirection="column" alignItems="center" minHeight="100vh" justifyContent={'center'}>
            <EmptyViews variant='h5' color='#000000' icon={<NotFoundImage />} text={localization.pageNotFound} />
            <Typography className='tab-label' marginBottom={2} color='#999999'>
                {localization.lookingPageNotFound}
            </Typography>
            <NavigationButton text={localization.returnToHomePage} navigateTo='/' buttonWidth='212px' />
        </Box>
    );
}
export default PageNotFound;
