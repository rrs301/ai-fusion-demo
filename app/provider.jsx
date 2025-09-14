"use client"
import React, { useContext, useState } from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"

/**
 * Theme provider component that wraps children with next-themes' ThemeProvider.
 *
 * Renders NextThemesProvider configured to apply themes via a CSS class
 * (attribute="class"), use the system preference by default (defaultTheme="system"),
 * enable system theme detection (enableSystem), and disable CSS transitions when
 * switching themes (disableTransitionOnChange). Any additional props are forwarded
 * to NextThemesProvider.
 *
 * @param {Object} props
 * @param {import('react').ReactNode} props.children - React nodes to render inside the provider.
 */
function Provider({ children, ...props }) {

    return (

        <NextThemesProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange

            {...props}>
            {children}</NextThemesProvider>

    )
}

export default Provider

export const useTheme = () => {
    return useContext(ThemeContext);
}