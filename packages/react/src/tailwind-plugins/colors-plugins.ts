import { PluginAPI } from 'tailwindcss/types/config';
function applyPrimaryColorAndShade({ addUtilities, theme }: PluginAPI) {
  const primaryColor = theme('primaryColor') || 'brand';
  const primaryShade = theme('primaryShade') || 500;

  addUtilities({
    '.primary-bg': {
      backgroundColor: theme(`colors.${primaryColor}.${primaryShade}`),
    },
    '.primary-text': {
      color: theme(`colors.${primaryColor}.${primaryShade}`),
    },
    '.primary-border': {
      borderColor: theme(`colors.${primaryColor}.${primaryShade}`),
    },
  });
}

function applyButtonClasses({ addComponents, theme }: PluginAPI) {
  const primaryColor = theme('primaryColor') || 'brand';
  const primaryShade = (theme('primaryShade') || 500) as number;

  const validShades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

  const adjustShade = (currentShade: number, adjustment: number) => {
    const currentIndex = validShades.indexOf(currentShade);
    const newIndex = Math.max(
      0,
      Math.min(validShades.length - 1, currentIndex + adjustment),
    );
    return validShades[newIndex];
  };

  addComponents({
    '.btn-filled': {
      backgroundColor: theme(`colors.${primaryColor}.${primaryShade}`),
      color: theme('colors.white'),
      '&:hover': {
        backgroundColor: theme(
          `colors.${primaryColor}.${adjustShade(primaryShade, -1)}`,
        ),
      },
      '&:active': {
        backgroundColor: theme(
          `colors.${primaryColor}.${adjustShade(primaryShade, 1)}`,
        ),
      },
      '&:disabled': {
        backgroundColor: theme('colors.neutral.100'),
        color: theme('colors.neutral.700'),
      },
    },

    '.btn-outline': {
      borderColor: theme(`colors.${primaryColor}.${primaryShade}`),
      color: theme(`colors.${primaryColor}.${primaryShade}`),
      '&:hover': {
        borderColor: theme(
          `colors.${primaryColor}.${adjustShade(primaryShade, -1)}`,
        ),
        color: theme(`colors.${primaryColor}.${adjustShade(primaryShade, -1)}`),
      },
      '&:active': {
        borderColor: theme(
          `colors.${primaryColor}.${adjustShade(primaryShade, 1)}`,
        ),
        color: theme(`colors.${primaryColor}.${adjustShade(primaryShade, 1)}`),
      },
      '&:disabled': {
        borderColor: theme('colors.neutral.100'),
        color: theme('colors.neutral.500'),
      },
    },

    '.btn-subtle': {
      backgroundColor: 'transparent',
      color: theme(`colors.${primaryColor}.${primaryShade}`),
      '&:hover': {
        color: theme(`colors.${primaryColor}.${adjustShade(primaryShade, -1)}`),
      },
      '&:active': {
        color: theme(`colors.${primaryColor}.${adjustShade(primaryShade, 1)}`),
      },
      '&:disabled': {
        color: theme('colors.neutral.700'),
      },
    },

    '.btn-light': {
      backgroundColor: theme(`colors.${primaryColor}.50`),
      color: theme(`colors.${primaryColor}.${primaryShade}`),
      '&:hover': {
        backgroundColor: theme(`colors.${primaryColor}.200`),
      },
      '&:active': {
        backgroundColor: theme(
          `colors.${primaryColor}.${adjustShade(primaryShade, 1)}`,
        ),
        color: theme('colors.white'),
      },
      '&:disabled': {
        backgroundColor: theme('colors.neutral.100'),
        color: theme('colors.neutral.700'),
      },
    },
  });
}

export { applyPrimaryColorAndShade, applyButtonClasses };
