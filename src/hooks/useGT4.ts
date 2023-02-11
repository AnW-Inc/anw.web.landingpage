import { useCallback, useEffect, useRef } from 'react'
import { toastError } from 'utils'
import GT4Init from 'utils/gt4'

interface IUseGt4Props {
  captchaId: string
  callback: any
}

const useGt4 = (props: IUseGt4Props) => {
  const { captchaId, callback } = props
  const gt4Ref = useRef(null)

  const handlerForBind = useCallback(async (c: any) => {
    // console.log(c);

    const button = gt4Ref.current
    var isReady = false
    // console.log(isReady);

    c.onReady(() => {
      isReady = true
    })

    button?.addEventListener('click', function () {
      // console.log("before ready: btn clicked");

      if (isReady) {
        // console.log("after ready: btn clicked");

        // both methods work
        // c.showBox();
        c.showCaptcha()
      }
    })

    c.onSuccess(async () => {
      var result = c.getValidate()
      // console.log("GT success: ", result);
      callback()
      // toastSuccess({ message: 'Captcha Success' })
    })

    c.onError((err: any) => {
      // console.log("GT error: ", err);
      toastError({ message: err.msg })
      c.reset()
    })
    c.onClose(() => {
      // console.log("GT close: ");
      toastError({ message: 'Captcha Closed!' })
      c.reset()
    })
    c.onFail((err: any) => {
      // console.log("GT fail: ", err);
      toastError({ message: 'Captcha Failed!' })

      c.reset()
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    GT4Init()

    // @ts-ignore
    initGeetest4(
      {
        captchaId: captchaId,
        product: 'bind',
        onError: (err: any) =>
          toastError({
            title: 'Error!',
            message: err.msg,
          }),
      },
      handlerForBind,
    )
  }, [captchaId, handlerForBind])
  return {
    gt4Ref,
  }
}

export default useGt4
