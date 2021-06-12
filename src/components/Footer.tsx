import * as React from 'react';
import {
  FooterSection,
  FooterContainer,
  FooterNewsletter,
  FooterNewsletterTitle,
  FooterNewsletterText,
  FooterNewsletterForm,
  FooterLabel,
  FooterNewsletterInput,
  FooterBtn,
  FooterLinkContainer,
  FooterLinksWrapper,
  FooterLinks,
  FooterLinkTitle,
  FooterLink,
  FooterCopyRight,
} from '../styles';
import { projects } from '../utils/mocks';

export const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <FooterNewsletter>
          <FooterNewsletterTitle>
            Get notified everytime I publish a new project
          </FooterNewsletterTitle>
          <FooterNewsletterText>Maybe?</FooterNewsletterText>
          <FooterNewsletterForm>
            <FooterLabel htmlFor="email">Email address</FooterLabel>
            <FooterNewsletterInput
              name="email"
              id="email"
              type="email"
              placeholder="Email address (doesn't work)"
            />
            <FooterBtn onClick={(e) => e.preventDefault()}>Submit</FooterBtn>
          </FooterNewsletterForm>
        </FooterNewsletter>
        <FooterLinkContainer>
          <FooterLinksWrapper>
            <FooterLinks>
              <FooterLinkTitle>About Me</FooterLinkTitle>
              <FooterLink href="/about">Nothing here</FooterLink>
            </FooterLinks>
            <FooterLinks>
              <FooterLinkTitle>Projects</FooterLinkTitle>
              {projects.map((pro) => {
                return <FooterLink href={pro.link}>{pro.name}</FooterLink>;
              })}
            </FooterLinks>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinks>
              <FooterLinkTitle>Contact</FooterLinkTitle>
              <FooterLink href="https://twitter.com/DevMidka">
                Twitter
              </FooterLink>
              <FooterLink href="https://www.youtube.com/channel/UC3_3_Mk4PuRhczYHqOx8P3w">
                Youtube
              </FooterLink>
              <FooterLink href="https://github.com/kymppi">Github</FooterLink>
            </FooterLinks>
          </FooterLinksWrapper>
        </FooterLinkContainer>
        <FooterCopyRight href="https://github.com/kymppi">
          {' '}
          &copy; Copyright 2021, Designed and coded with 💙 by Midka
        </FooterCopyRight>
      </FooterContainer>
    </FooterSection>
  );
};
