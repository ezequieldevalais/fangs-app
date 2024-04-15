const config = {
  // basename: only at build time to set, and Don't add '/' at end off BASENAME for breadcrumbs, also Don't put only '/' use blank('') instead,
  // like '/berry-material-react/react/default'
  basename: '',
  defaultPath: '/dashboard/default',
  fontFamily: `'Roboto', sans-serif`,
  borderRadius: 12,
  API_URL:
    process.env.API_URL ?? process.env.NODE_ENV === 'production' ? 'https://fangs-back-7ux4ximqbq-rj.a.run.app' : 'http://localhost:3001'
};

export default config;
