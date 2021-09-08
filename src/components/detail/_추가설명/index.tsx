import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Section from '../Layout/Section';
import Wrap from '../Layout/Wrap';
import { GrClose } from 'react-icons/gr';

const _추가설명 = ({ exhibited, essay, literature }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleClickOpenModal = useCallback((title, description) => {
    setTitle(title);
    setDescription(description);
    setIsOpen(true);
  }, []);

  const handleClickCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <_컨테이너>
      <Section>
        <Wrap>
          <div className="flex">
            <div className="col">
              <h3 className={'font-garamond'}>Exhibited</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${exhibited.slice(0, 320)}...`,
                }}
              />
              <button onClick={() => handleClickOpenModal('Exhibited', exhibited)}>
                <img src="/assets/images/icon-mor.png" alt="" />
              </button>
            </div>
            <div className="col">
              <h3 className={'font-garamond'}>Literature</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${literature.slice(0, 320)}...`,
                }}
              />
              <button onClick={() => handleClickOpenModal('Literature', literature)}>
                <img src="/assets/images/icon-mor.png" alt="" />
              </button>
            </div>
            <div className="col">
              <h3 className={'font-garamond'}>Essay</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${essay.slice(0, 320)}...`,
                }}
              />
              <button onClick={() => handleClickOpenModal('Essay', essay)}>
                <img src="/assets/images/icon-mor.png" alt="" />
              </button>
            </div>
          </div>
        </Wrap>
      </Section>

      {isOpen && (
        <Modal>
          <div className={'modal__bg'} onClick={handleClickCloseModal} />
          <div className={'modal__content'}>
            <button className={'modal__close'} onClick={handleClickCloseModal}>
              <GrClose />
            </button>
            <header className={'modal__header'}>
              <h2 className={'font-garamond'}>{title}</h2>
            </header>
            <div className={'modal__body'}>
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </div>
          </div>
        </Modal>
      )}
    </_컨테이너>
  );
};

const Modal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 8000;
  display: flex;
  align-items: center;
  justify-content: center;

  .modal__bg {
    left: 0;
    top: 0;
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.25);
  }

  .modal__close {
    position: absolute;
    width: 30px;
    height: 30px;
    margin: 0;
    font-size: 30px;
    right: 40px;
    top: 40px;
    z-index: 2;
    @media screen and (max-width: 768px) {
      width: 20px;
      height: 20px;
      right: 20px;
      top: 20px;
      font-size: 20px;
    }
  }

  .modal__content {
    position: relative;
    background: #fff;
    width: 100%;
    max-width: 90vw;
    padding: 2.5em;
    max-height: 80vh;
    z-index: 2;
    overflow: auto;
    @media screen and (max-width: 768px) {
      padding: 20px;
    }
  }
  .modal__body {
    border-top: 1px solid #222;
    padding: 1em 0;
    p {
      line-height: 1.5em;
      @media screen and (max-width: 768px) {
        font-size: 14px;
      }
    }
  }
  .modal__header {
    padding-top: 30px;
    padding-bottom: 10px;
    @media screen and (max-width: 768px) {
      padding-top: 20px;
    }

    h2 {
      line-height: 1.25em;
      font-size: 2rem;
    }
  }
`;

const _컨테이너 = styled.div`
  background: #fbf7f1;

  .flex {
    display: flex;
    @media screen and (max-width: 1200px) {
      display: block;
    }
  }
  .col {
    flex: 1;

    & ~ .col {
      margin-left: 2em;
      @media screen and (max-width: 1200px) {
        margin: 0;
        margin-top: 3em;
      }
    }
  }

  h3 {
    font-size: 2rem;
    line-height: 1.3em;
    padding-bottom: 5px;
    margin-bottom: 10px;
    border-bottom: 1px solid #222;
    font-weight: 600;
  }
  p {
    font-size: 1rem;
    line-height: 1.375em;
  }
  button {
    text-align: center;
    margin-top: 15px;
    width: 100%;
    img {
      vertical-align: top;
      height: 1.75rem;
    }
  }
`;

export default _추가설명;
