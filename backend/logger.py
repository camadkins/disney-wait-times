import logging
from backend.config import LOG_FILE, LOG_LEVEL

# Configure logging
logging.basicConfig(
    filename=LOG_FILE,
    level=getattr(logging, LOG_LEVEL),
    format="%(asctime)s - %(levelname)s - %(message)s",
)

def get_logger(name):
    """
    Returns a configured logger instance.
    """
    return logging.getLogger(name)

# Example usage
if __name__ == "__main__":
    logger = get_logger(__name__)
    logger.info("Logger initialized successfully.")
    logger.error("This is a sample error message.")