export const techBadgeAnimation = {
  initial: { opacity: 0, scale: 0 },
  whileInView: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0 },
}

export const fadeUpAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
}

export const fadeProjectCardAnimation = {
  initial: { opacity: 0, y: 100 },
  whileInView: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
  transition: { duration: 0.5 },
}

export const fadeProjectTitleAnimation = {
  initial: { opacity: 0, y: 100, scale: 0.5 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 100, scale: 0.5 },
  transition: { duration: 0.3, delay: 0.3 },
}

export const backToTopAnimation = {
  initial: { opacity: 0, right: -10 },
  animate: { opacity: 1, right: 16 },
  exit: { opacity: 0, right: -10 },
}

export const headerAnimation = {
  initial: { top: -100 },
  animate: { top: 0 },
  transition: { duration: 0.5 },
}

export const heroSectionAnimation = {
  initial: { opacity: 0, x: -100 },
  whileInView: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
  transition: { duration: 0.5 },
}

export const profilePictureAnimation = {
  initial: { opacity: 0, y: 200, scale: 0.5 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 200, scale: 0.5 },
  transition: { duration: 0.5 },
}

export const knownTechsAnimation = {
  initial: { opacity: 0, x: -100 },
  whileInView: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
}

export const sectionTitleAnimation = {
  initial: { opacity: 0, x: -100 },
  whileInView: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
}

export const projectPageThumbnailUrlAnimation = {
  initial: { opacity: 0, scale: 1.3 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 },
}

export const pageIntroductionAnimation = {
  initial: { opacity: 0, y: 100 },
  whileInView: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
  transition: { duration: 0.6 },
}