import React, {useState, useEffect, useRef} from 'react';
import {useSelector} from 'react-redux';
import {Link, useLocation} from 'react-router-dom';

import {AppBar, IconButton, Menu, MenuItem} from '@material-ui/core';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import {Menu as MenuIcon} from '@material-ui/icons';

import {HeaderReducer} from '../../redux/reducers/header/index.reducer';
import {Store} from '../../redux/store/types.store';

import {ReactComponent as Logo} from '../../assets/icons/FENAV.svg';

const Header = () => {
  const {pagesTitles} = useSelector<Store, HeaderReducer>(state => state.header);

  const {pathname} = useLocation();

  const [menuAnchorElement, setMenuAnchorElement] = useState<null | HTMLElement>(null);
  const [visiblePageTitles, setVisiblePageTitles] = useState<number>(6);

  const headerRef = useRef<HTMLButtonElement>(null);

  const classes = useStyles();

  useEffect(() => {
    if (headerRef.current?.clientWidth) {
      handleVisiblePageTitles(headerRef.current?.clientWidth);
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
        handleVisiblePageTitles(headerRef.current?.clientWidth);
      }
    };

    window.addEventListener('resize', resizeThrottler, false);
  }, []);

  useEffect(() => {
    document.title = `${pathname} - FENAV`;
  }, [pathname]);

  const a11yProps = (index: any) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-ItemHeader-${index}`,
    };
  };

  const handleVisiblePageTitles = (headerWidth: number) => {
    if (headerWidth >= 1320) {
      setVisiblePageTitles(6);
      return;
    }
    if (headerWidth < 1320 && headerWidth >= 1160) {
      setVisiblePageTitles(5);
      return;
    }
    if (headerWidth < 1160 && headerWidth >= 1020) {
      setVisiblePageTitles(4);
      return;
    }
    if (headerWidth < 1020 && headerWidth >= 880) {
      setVisiblePageTitles(3);
      return;
    }
    if (headerWidth < 880 && headerWidth >= 720) {
      setVisiblePageTitles(2);
      return;
    }
    if (headerWidth < 720 && headerWidth >= 600) {
      setVisiblePageTitles(1);
      return;
    }
    setVisiblePageTitles(0);
    return;
  };

  const handleButtonMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchorElement(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorElement(null);
  };

  const handleClickMenu = () => {
    setMenuAnchorElement(null);
  };

  return (
    <AppBar data-testid="Header" className={classes.header} position="relative" ref={headerRef}>
      <Logo className={classes.logo} />

      <nav className={classes.nav}>
        <ul className={classes.ul} aria-label="simple tabs">
          {pagesTitles
            .filter((_, i) => i + 1 <= visiblePageTitles)
            .map((e, i) => (
              <Link
                key={e}
                className={classes.link}
                to={`/${e}`}
                data-testid={`categorie-${i + 1}`}
                {...a11yProps(i)}
              >
                {e}
              </Link>
            ))}
        </ul>

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
            classes={{paper: classes.menuPopover}}
            open={Boolean(menuAnchorElement)}
            onClose={handleMenuClose}
          >
            {pagesTitles
              .filter((_, i) => i + 1 > visiblePageTitles)
              .map((e, i) => (
                <MenuItem key={e} onClick={handleClickMenu}>
                  <Link
                    to={`/${e}`}
                    className={classes.link}
                    {...a11yProps(i + visiblePageTitles)}
                    data-testid={`categorie-${i + visiblePageTitles + 1}`}
                  >
                    {e}
                  </Link>
                </MenuItem>
              ))}
          </Menu>
        </div>
      </nav>
    </AppBar>
  );
};

export default Header;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '100%',
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
    nav: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
    },
    ul: {
      height: '100%',
      padding: '0px',
      display: 'flex',
      alignItems: 'center',
    },
    link: {
      padding: '0px',
      minWidth: '0px',
      width: '140px',
      textAlign: 'center',
      color: 'white',
      textDecoration: 'none',
      '&:hover': {
        color: 'black',
      },
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
    menuPopover: {
      marginTop: '30px',
      backgroundColor: 'grey',
    },
  })
);
