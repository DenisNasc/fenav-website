import React, {useState, useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {AppBar, IconButton, Menu, MenuItem, Tabs, Tab} from '@material-ui/core';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import {Menu as MenuIcon} from '@material-ui/icons';

import {HeaderReducer, HeaderReducerAction} from '../../redux/reducers/header/index.reducer';
import {Store} from '../../redux/store/types.store';

import {ReactComponent as Logo} from '../../assets/icons/FENAV.svg';

const Header = () => {
  const dispatch = useDispatch();

  const {tabValue} = useSelector<Store, HeaderReducer>(state => state.header);

  const [menuAnchorElement, setMenuAnchorElement] = useState<null | HTMLElement>(null);
  const [visibleTabs, setVisibleTabs] = useState<number>(6);

  const headerRef = useRef<HTMLButtonElement>(null);

  const classes = useStyles();

  const pageTitles = [
    'A Faculdade',
    'Como Ingressar',
    'Notícias',
    'Publicações',
    'Pós-Graduação',
    'Área do Aluno',
  ];

  useEffect(() => {
    if (headerRef.current?.clientWidth) {
      handleVisibleTabs(headerRef.current?.clientWidth);
    }

    let resizeTimeout: null | NodeJS.Timeout = null;

    const resizeThrottler = () => {
      // ignore resize events as long as an actualResizeHandler execution is in the queue
      if (!resizeTimeout) {
        resizeTimeout = setTimeout(() => {
          resizeTimeout = null;
          actualResizeHandler();

          // The actualResizeHandler will execute at a rate of 15fps
        }, 66);
      }
    };

    const actualResizeHandler = () => {
      console.log('resize', headerRef.current?.clientWidth);

      if (headerRef.current?.clientWidth) {
        handleVisibleTabs(headerRef.current?.clientWidth);
      }
    };

    window.addEventListener('resize', resizeThrottler, false);
  }, []);

  useEffect(() => {
    if (typeof tabValue !== 'number') {
      document.title = 'FENAV – Faculdade de Engenharia Naval';
      return;
    }

    document.title = `${pageTitles[tabValue]} – FENAV`;
  }, [tabValue]);

  const a11yProps = (index: any) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-ItemHeader-${index}`,
    };
  };

  const handleVisibleTabs = (headerWidth: number) => {
    if (headerWidth >= 1320) {
      setVisibleTabs(6);
      return;
    }
    if (headerWidth < 1320 && headerWidth >= 1160) {
      setVisibleTabs(5);
      return;
    }
    if (headerWidth < 1160 && headerWidth >= 1020) {
      setVisibleTabs(4);
      return;
    }
    if (headerWidth < 1020 && headerWidth >= 880) {
      setVisibleTabs(3);
      return;
    }
    if (headerWidth < 880 && headerWidth >= 720) {
      setVisibleTabs(2);
      return;
    }
    if (headerWidth < 720 && headerWidth >= 600) {
      setVisibleTabs(1);
      return;
    }
    setVisibleTabs(0);
    return;
  };

  const handleButtonMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchorElement(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorElement(null);
  };

  const handleClickMenu = (tabValue: number) => {
    setMenuAnchorElement(null);

    const action: HeaderReducerAction = {
      type: 'SET_TABVALUE',
      payload: {tabValue},
    };

    dispatch(action);
  };

  const handleTabsChange = (event: React.ChangeEvent<{}>, tabValue: number) => {
    const action: HeaderReducerAction = {
      type: 'SET_TABVALUE',
      payload: {tabValue},
    };

    dispatch(action);
  };

  return (
    <AppBar data-testid="Header" className={classes.header} position="fixed" ref={headerRef}>
      <Logo className={classes.logo} />

      <Tabs
        classes={{root: classes.tabsContainer}}
        value={tabValue}
        onChange={handleTabsChange}
        aria-label="simple tabs"
      >
        {pageTitles
          .filter((_, i) => i + 1 <= visibleTabs)
          .map((e, i) => (
            <Tab
              key={e}
              classes={{root: classes.tab}}
              data-testid={`categorie-${i + 1}`}
              label={e}
              {...a11yProps(i)}
            />
          ))}

        <div className={classes.menu}>
          <IconButton
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleButtonMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={menuAnchorElement}
            keepMounted
            open={Boolean(menuAnchorElement)}
            onClose={handleMenuClose}
          >
            {pageTitles
              .filter((_, i) => i + 1 > visibleTabs)
              .map((e, i) => (
                <MenuItem key={e} onClick={() => handleClickMenu(visibleTabs + i)}>
                  {e}
                </MenuItem>
              ))}
          </Menu>
        </div>
      </Tabs>
    </AppBar>
  );
};

export default Header;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '70px',
      padding: '0px 100px',
      [theme.breakpoints.down(450)]: {
        padding: '0px',
      },
    },
    logo: {
      paddingBottom: '5px',
      paddingLeft: '20px',
      width: '60px',
      height: '80px',
    },
    tabsContainer: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
    },
    tab: {
      padding: '0px',
      minWidth: '0px',
      width: '140px',
      marginRight: '5px',
    },
    menu: {
      display: 'none',
      [theme.breakpoints.down(1320)]: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '60px',
        height: '48px',
      },
    },
  })
);
