<div className={classes.grow}>
    <AppBar position="static">
        <Toolbar>
        <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
        >
            <MenuIcon />
        </IconButton>
        <Typography className={classes.title} variant="h6" noWrap>
            Home Page
        </Typography>
        <Button variant="contained" color="primary" href="/form">Form</Button>
        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>
            <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
            >
            <AccountCircle />
            </IconButton>
        </div>
        <div className={classes.sectionMobile}>
            <IconButton
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
            >
            <MoreIcon />
            </IconButton>
        </div>
        </Toolbar>
    </AppBar>
{renderMobileMenu}
{renderMenu}
</div>
    